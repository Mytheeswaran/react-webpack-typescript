pipeline{
    agent any
    stages {
        stage('Checkout code') {
            steps {
                sh '[ -d my-app ] || mkdir my-app'
                sh 'cd my-app'
                checkout scm
                sh 'ls -a'
            }
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -f Dockerfile -t nginx-jenkins-image:0.2 .'
            }
        }
        stage('Run Docker image') {
            steps {
                sh 'docker run -it --rm -d -p 3000:80 --name my-nginx-container  nginx-jenkins-image:0.2'
            }
        }
    }
}