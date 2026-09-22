pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/fabismohammed/new-web-deployment.git
                    ls -l
                    echo Current user:
                    echo $USER
                '''    
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r new-web-deployment/* /var/www/html
                '''    
            }
        }
    }
}
