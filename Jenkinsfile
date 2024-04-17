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
        LOGIN_CREDS = 'mytheeswaran93@gmail.com'
    }
    stages {
        stage('Pull Docker image') {
            steps {
                sh 'Username is $LOGIN_CREDS'
                // sh 'docker pull mytheeswaran/my-repository:jenkins'
            }
        }
        // stage('Run Docker image') {
        //     steps {
        //         sh 'docker run -it --rm -d -p 3000:80 --name jenkins-nginx-container  mytheeswaran/my-repository:jenkins'
        //     }
        // }
    }
}