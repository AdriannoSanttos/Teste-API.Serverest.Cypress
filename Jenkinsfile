pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/AdriannoSanttos/Teste-API.Serverest.Cypress.git', branch: 'main'
            }
        }

        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Rodar testes') {
            steps {
                bat 'npx cypress run --reporter cypress-mochawesome-reporter'
            }
        }

        stage('Arquivar evidências') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            }
        }
    }
}
