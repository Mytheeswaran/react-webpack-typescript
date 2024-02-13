pipeline{
    agent any

    stages{
        stage('Clone repository') {
            /* Let's make sure we have the repository cloned to our workspace */
            steps{
                checkout scm
            }
        }

        stage("test"){
            steps{
                echo 'testing the application...'
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application...'
            }
        }
    }
}