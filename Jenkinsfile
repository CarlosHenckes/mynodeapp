node {

   stage('Clone Repository') {
        // Get some code from a GitHub repository
        checkout scm
   }

   stage('Remove container if already running'){

    //Remove maven-build-container if it exists
           //sh "docker rm -f mynodeapp"

   }

      stage('Deploy Spring Boot Application') {



        sh "docker run --name mynodeapp -d -p 8087:8087 carloshenckes/docker-test/"
   }

}