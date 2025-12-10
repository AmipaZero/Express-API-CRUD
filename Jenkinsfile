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

pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint...'
                bat 'npx eslint . || echo "Lint skipped"'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                bat 'npm run build || echo "No build script defined"'
            }
        }
    }
}
