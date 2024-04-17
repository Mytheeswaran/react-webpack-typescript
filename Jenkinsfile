// pipeline{
//     agent any
//     stages {
//         stage('Checkout code') {
//             steps {
//                 sh '[ -d my-app ] || mkdir my-app'
//                 sh 'cd my-app'
//                 checkout scm
//                 // sh 'ls -a'
//             }
//         }
//         stage('Build Docker image') {
//             steps {
//                 sh 'docker build -f Dockerfile -t nginx-jenkins-image:0.2 .'
//             }
//         }
//         stage('Run Docker image') {
//             steps {
//                 sh 'docker run -it --rm -d -p 3000:80 --name my-nginx-container  nginx-jenkins-image:0.2'
//             }
//         }
//     }
// }

pipeline{
    agent any
    environment {
        registry = "mytheeswaran/my-repository"
        registryCredential = 'docker-creds'
        BUILD_NUMBER = 'jen'
    }
    stages {
        stage('Checkout code') {
            steps {
                sh '[ -d my-app ] || mkdir my-app'
                sh 'cd my-app'
                checkout scm
                // sh 'ls -a'
            }
        }
        stage('Building our image') {
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Push Docker image') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
                sh 'Username is $LOGIN_CREDS'
                // sh 'docker pull mytheeswaran/my-repository:jenkins'
            }
        }
    }
}

//Building Docker images to Docker Hub using Jenkins Pipelines
// https://gcore.com/learning/building-docker-images-to-docker-hub-using-jenkins-pipelines/#:~:text=On%20Jenkins%20you%20need%20to,this%20credential%20from%20your%20scripts.