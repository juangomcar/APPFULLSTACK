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
                // comandos para construir tu aplicación
            }
        }
        stage('Test') {
            steps {
                // comandos para probar tu aplicación
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // comandos para construir la imagen Docker
                }
            }
        }
        stage('Run Docker Image') {
            steps {
                script {
                    // comandos para ejecutar la imagen Docker
                }
            }
        }
    }
}
