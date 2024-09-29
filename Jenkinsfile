pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/juangomcar/APPFULLSTACK'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t appfullstack .'
            }
        }
        stage('Run Docker Image') {
            steps {
                sh 'docker run -d -p 8080:8080 appfullstack'
            }
        }
    }
}
