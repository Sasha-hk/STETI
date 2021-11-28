#!/bin/bash


# Create .env file if it does not exist
if [ ! -f '.env' ]; then 

    DOMAIN_NAME=''
    USER_TO_RUN_GUNICORN=''
    PROJECT_STATE='dev'
    PROJECT_STATE_CHOOSE=1
    DJANGO_PORT=8001
    NEXT_PORT=3001

    echo -n "Enter domain name: " 
    read DOMAIN_NAME

    echo -n "Enter username to run gunicorn: " 
    read USER_TO_RUN_GUNICORN

    echo "Select project mood\n\t1 - development\n\t2 - production"
    read PROJECT_STATE_CHOOSE 
    if [ ${PROJECT_STATE_CHOOSE} = 1 ]; 
    then
        PROJECT_STATE='development'

    elif [ ${PROJECT_STATE_CHOOSE} = 2 ];
    then
        PROJECT_STATE='production'

    else 
        echo "The parameter is incorrect, so we left the development mode"

    fi 

echo "BASE_DIR='$( dirname  ${PWD})'

PROJECT_NAME='STETI'

DOMAIN_NAME='${DOMAIN_NAME}'

USER_TO_RUN_GUNICORN='${USER_TO_RUN_GUNICORN}'

DJANOG_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'

JWT_ACCESS_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'
JWT_REFRESH_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'

PROJECT_STATE='${PROJECT_STATE}'

DJANGO_PORT='${DJANGO_PORT}'
NEXT_PORT='${NEXT_PORT}'

PATH_TO_BACKEND='${BASE_DIR}/backend'
PATH_TO_FRONTEND='${BASE_DIR}/frontend'

PUBLIC_API_URL_DEV='http://${DOMAIN_NAME}'
PUBLIC_API_URL_PROD='http://127.0.0.1:3333/api'
" >| .env

else 
    echo "[-] .env file already exists"
fi



# Set and get needed variables
source ./.env 



# Make environment for django
if [ ! -d 'env' ]; then
    virtualenv env

    # Install packages
    source env/bin/activate

    $BASE_DIR/env/env/bin/python -m pip install --upgrade pip
    pip install -r requirements.txt
else 
    echo "[-] env directory already exists"
fi



# npm install 
cd ..
cd frontend
if [ ! -d 'node_modules' ]; then 
    npm install
else 
    echo "[-] node_modules directory already exists"
fi



# finaly
cd ..
cd env
