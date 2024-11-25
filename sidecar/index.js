const amqp = require('amqplib'); // Cliente RabbitMQ
const axios = require('axios'); // Cliente HTTP para comunicación con backend

// Leer variables desde el archivo .env
require('dotenv').config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const QUEUE_NAME = process.env.QUEUE_NAME;
const BACKEND_URL = process.env.BACKEND_URL; // Dirección del backend

async function startSidecar() {
    try {
        // Conectar a RabbitMQ
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();

        // Asegurar la cola
        await channel.assertQueue(QUEUE_NAME, { durable: true });
        console.log(`Sidecar conectado a RabbitMQ. Escuchando en la cola: ${QUEUE_NAME}`);

        // Consumir mensajes
        channel.consume(QUEUE_NAME, async (msg) => {
            const messageContent = JSON.parse(msg.content.toString());
            console.log('Mensaje recibido:', messageContent);

            try {
                // Procesar el mensaje
                const processedMessage = processMessage(messageContent);

                // Enviar al backend
                await sendToBackend(processedMessage);

                // Confirmar el mensaje en RabbitMQ
                channel.ack(msg);
                console.log('Mensaje procesado y enviado al backend.');
            } catch (err) {
                console.error('Error al procesar o enviar el mensaje:', err);
            }
        });
    } catch (err) {
        console.error('Error al conectar con RabbitMQ:', err);
    }
}

// Función para procesar el mensaje
function processMessage(message) {
    // Aquí puedes modificar o enriquecer el mensaje según sea necesario
    return {
        ...message,
        processedAt: new Date().toISOString(), // Agregar la fecha de procesamiento
    };
}

// Función para enviar el mensaje procesado al backend
async function sendToBackend(data) {
    try {
        const response = await axios.post(BACKEND_URL, data);
        console.log('Respuesta del backend:', response.status, response.data);
    } catch (err) {
        console.error('Error al enviar datos al backend:', err.response?.data || err.message);
        throw err;
    }
}

// Iniciar el sidecar
startSidecar();
