pipeline {
    agent any

    stages {
        stage('Checkout do repositório') {
            steps {
                echo 'Clonando repositório...'
                git url: 'https://github.com/AdriannoSanttos/Teste-API.Serverest.Cypress.git', branch: 'main'
            }
        }

        stage('Instalar dependências') {
            steps {
                echo 'Instalando pacotes...'
                bat 'npm install'
            }
        }

        stage('Rodar testes de API') {
            steps {
                echo 'Executando testes de API com Cypress e Mochawesome...'
                bat 'npx cypress run --reporter mochawesome'
            }
        }

        stage('Arquivar evidências') {
            steps {
                echo 'Arquivando relatórios...'
                archiveArtifacts artifacts: 'cypress/reports/*.html', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizada. Evidências arquivadas.'
        }
    }
}
