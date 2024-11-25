pipeline {
    agent any 
    stages {
        stage('Checkout') {
            steps {
                checkout scm 
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building the application..."'
                // Aquí irían los comandos reales para construir tu aplicación
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Testing the application..."'
                // Aquí irían los comandos reales para probar tu aplicación
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'echo "Building Docker image..."'
                    // Aquí irían los comandos para construir la imagen Docker, por ejemplo:
                    sh 'docker build -t nombre-imagen .'
                }
            }
        }
        stage('Scan Docker Image with Trivy') {
            steps {
                script {
                    sh 'echo "Scanning Docker image with Trivy..."'
                    // Asegúrate de que el nombre de la imagen y la etiqueta sean correctos
                    sh 'trivy image --exit-code 1 --severity HIGH,CRITICAL nombre-imagen:tag'
                }
            }
        }
        stage('Run Docker Image') {
            steps {
                script {
                    sh 'echo "Running Docker image..."'
                    // Aquí irían los comandos para ejecutar la imagen Docker, por ejemplo:
                    sh 'docker run -d nombre-imagen'
                }
            }
        }
    }
}
