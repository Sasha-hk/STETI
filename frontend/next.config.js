require('dotenv').config({path: '../env/.env'})

PROJECT_STATE = process.env.PROJECT_STATE
PUBLIC_API_URL_DEV = process.env.PUBLIC_API_URL_DEV
PUBLIC_API_URL_PROD = process.env.PUBLIC_API_URL_PROD


function env() {
    devSnippets = ['development', 'DEVELOPMENT', 'dev', 'DEV']
    prodSnippets = ['production', 'PRODUCTION', 'prod', 'PROD']
    envObject = {}

    if (devSnippets.indexOf(PROJECT_STATE) > -1) {
        envObject.API_URL = PUBLIC_API_URL_DEV
    }
    else if (prodSnippets.indexOf(PROJECT_STATE) > -1) {
        envObject.API_URL = PUBLIC_API_URL_PROD
    }
    else {
        console.log('Enter correct PROJECT_STATE mod!')
    }

    return envObject
}

module.exports = {
    reactStrictMode: true,
    env: env(),
    experimental: {
        scrollRestoration: true,
    },
}
