#!/bin/bash


# Create .env file if it does not exist
if [ ! -f '.env' ]; then 
echo "BASE_DIR='$( dirname  ${PWD})'

PROJECT_NAME='STETI'

DOMAIN_NAME='steti.lviv.ua'

USER_TO_RUN_GUNICORN='petryk'

DJANOG_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'

JWT_ACCESS_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'
JWT_REFRESH_SECRET_KEY='kns-0xywecure8o*i=0azse@^bve=7gqc#ey'

PROJECT_STATE='development'

DJANGO_PORT=8001
NEXT_PORT=3001

PATH_TO_BACKEND=${BASE_DIR}/backend
PATH_TO_FRONTEND=${BASE_DIR}/frontend

PUBLIC_API_URL_DEV='http://127.0.0.1:3333/api'
PUBLIC_API_URL_PROD='http://127.0.0.1:3333/api'
" >| .env

else 
    echo [-] .env file already exists
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
    echo [-] env directory already exists
fi



# npm install 
cd ..
cd frontend
if [ ! -d 'node_modules' ]; then 
    npm install
else 
    echo [-] node_modules directory already exists
fi



# finaly
cd ..
cd env
