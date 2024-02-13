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
                sh ‘docker build -f -t nginx-ts-jenkins:0.1 .’
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application...'
            }
        }
    }
}