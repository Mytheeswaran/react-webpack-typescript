pipeline{
    agent any

    tools{
        docker ''
    }
    stages{
        stage('Clone repository') {
            steps{
                checkout scm
            }
        }

        // stage("build"){
        //     /*https://myrestraining.com/blog/docker/how-to-build-docker-image-using-jenkins-pipeline/*/
        //     /*https://community.jenkins.io/t/jenkins-pipeline-fails-with-docker-not-found-message/3994/2*/
        //     /*docker compose -- https://www.cloudbees.com/blog/how-to-install-and-run-jenkins-with-docker-compose*/
        //     /*Java techie -- https://www.youtube.com/watch?v=PKcGy9oPVXg*/
        //     /*docker plugin is not found: https://stackoverflow.com/questions/62576978/cant-find-docker-plugin-on-jenkins*/
        //     steps {
        //         script{
        //             sh 'docker build -t nginx-jenkins:latest .'
        //         } 
        //     }
        // }

        // stage("deploy"){
        //     steps{
        //         echo 'deploying the application...'
        //     }
        // }
    }
}