pipeline {
    agent any

    stages {
        stage('Checkout do repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/AdriannoSanttos/Teste-API.Serverest.Cypress.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Rodar testes de API') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Arquivar evidências') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            }
        }
    }
}
