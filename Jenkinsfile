pipeline{
    agent any
    stages {
        stage('Checkout code') {
            steps {
                sh '[ -d my-app ] || mkdir my-app'
                sh 'cd my-app'
                sh 'pwd'
                checkout scm
            }
        }
        // stage('Check current Directory') {
        //     steps {
        //         sh 'pwd'
        //     }
        // }
    }
}