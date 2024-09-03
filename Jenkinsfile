pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node_1"
                    }
                    steps {
                        git url: 'https://github.com/AlexandraNayanzina/cypress_course_2024.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npx cypress run --record --key ad79f772-2145-492d-a1c0-97c744b943a6'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node_2"
                    }
                    steps {
                        git url: 'https://github.com/AlexandraNayanzina/cypress_course_2024.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npx cypress run --record --key ad79f772-2145-492d-a1c0-97c744b943a6 --parallel'
                    }
                }
            }
        }
    }
}