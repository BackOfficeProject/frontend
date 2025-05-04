pipeline {
  agent any

  environment {
    IMAGE_NAME = "frontend-nginx"
    CONTAINER_NAME = "frontend-nginx-container"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        sh '''
            bash -c "
                npm install
                npm run build
            "
        '''
      }
    }

    stage('Docker Build & Deploy') {
      steps {
        script {
          sh '''
            bash -c "
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true
                docker build -f nginx/Dockerfile.nginx -t ${IMAGE_NAME} .
                docker run -d --name ${CONTAINER_NAME} --network my-network -p 80:80 ${IMAGE_NAME}
            "
          '''
        }
      }
    }
  }
}