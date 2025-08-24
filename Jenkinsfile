pipeline {
    agent any
    stages {
        stage('Checkout') {
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
                bat 'npx cypress run --spec "cypress/e2e/api/**/*.cy.js"'
            }
        }
    }
}
