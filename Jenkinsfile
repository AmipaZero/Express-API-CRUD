//stage manual
// pipeline {
//   agent any

//   stages {
//     stage('Install') {
//       steps {
//         bat 'npm install'
//       }
//     }

//     stage('Test') {
//     steps {
//         bat 'echo No tests available'
//         }
//     }

//   }
// }

// pipeline {
//     agent any

//     stages {
//         stage('Install') {
//             steps {
//                 echo 'Installing dependencies...'
//                 bat 'npm install'
//             }
//         }

//         stage('Test') {
//             steps {
//                 echo 'Running tests...'
//                 bat 'npm test'
//             }
//         }

//         stage('Lint') {
//             steps {
//                 echo 'Running lint...'
//                 bat 'npx eslint . || echo "Lint skipped"'
//             }
//         }

//         stage('Build') {
//             steps {
//                 echo 'Building project...'
//                 bat 'npm run build || echo "No build script defined"'
//             }
//         }
//     }
// }
pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'echo No tests yet'
            }
        }

        stage('Lint') {
            steps {
                bat 'npx eslint . || echo "Lint skipped"'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t express-api:latest .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker stop express-api || echo "no running container"'
                bat 'docker rm express-api || echo "no old container"'
                bat 'docker run -d -p 3000:3000 --name express-api express-api:latest'
            }
        }
    }
}
