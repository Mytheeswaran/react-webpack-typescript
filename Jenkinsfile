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
                sh ‘docker build -f -t nginx-ts-jenkins:${BUILD_NUMBER} .’
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application...'
            }
        }
    }
}