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
                bat 'npx cypress run --reporter mochawesome'
            }
        }

        stage('Arquivar evidências') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/*.html', allowEmptyArchive: true
            }
        }
    }
}
