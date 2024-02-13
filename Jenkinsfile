pipeline{
    agent any

    stages{
        stage('Clone repository') {
            /* Let's make sure we have the repository cloned to our workspace */
            steps{
                checkout scm
            }
        }

        stage("build"){
            steps{
                step{
                    app = docker.build("getintodevops/hellonode")
                }
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application...'
            }
        }
    }
}