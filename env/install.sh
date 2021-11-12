#!/bin/bash

# define needed variables
BASE_DIR=$( dirname  ${PWD})
PATH_TO_BACKEND=$BASE_DIR/backend
PATH_TO_FRONTEND=$BASE_DIR/frontend


# Create .env file
TEMPLETE_ENV_FILE_NAME='.env.template'
ENV_TEMPLATE=`cat ${TEMPLETE_ENV_FILE_NAME}`
if [ ! -f '.env' ]; then 
    echo $ENV_TEMPLATE >> .env

else 
    echo [+] .env file already exists
fi

# Make environment for django
if [ ! -d 'env' ]; then
    virtualenv env

    # Install packages
    source env/bin/activate
    pip install -r requirements.txt
else 
    echo [+] env directory already exists
fi


# npm install 
cd ..
cd frontend
if [ ! -d 'node_modules' ]; then 
    npm install
else 
    echo [+] node_modules directory already exists
fi

# finaly
cd ..
cd env
