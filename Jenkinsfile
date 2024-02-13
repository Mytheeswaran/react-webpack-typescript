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
                sh ‘docker build -f -t nginx-ts-jenkins .’
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application...'
            }
        }
    }
}