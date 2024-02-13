pipeline{
    agent any

    stages{
        stage('Clone repository') {
            steps{
                checkout scm
            }
        }

        stage("build"){
            steps {
                sh 'docker build -t nginx-jenkins:latest .'
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application...'
            }
        }
    }
}