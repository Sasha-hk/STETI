#!/bin/bash


# Set and get needed variables

. ./install.sh



# Check if pachage is installed
if ! dpkg -s 'sudo' >/dev/null 2>&1; then
  echo 'You may to install sudo'
  read x 
fi
if ! dpkg -s 'nginx' >/dev/null 2>&1; then
  echo 'You may to install nginx'
  read x 
fi
if ! dpkg -s 'nginx' >/dev/null 2>&1; then
  echo 'You may to install nginx'
  read x 
fi



# Create needed dirs
if [ ! -d 'nginx' ]; then 
    mkdir nginx
fi
if [ ! -d 'systemd' ]; then 
    mkdir systemd
fi
if [ ! -d 'systemd/log' ]; then 
    mkdir systemd/log
fi



# Fill Nginx config
echo "# API / Django / python
server {
    listen 80;
    server_name ${DOMAIN_NAME};

    location / {
        proxy_set_header Host      \$host; 
        proxy_pass http://127.0.0.1:${NEXT_PORT};
    }
}

# FRONTEND / Next.js / node
server {
    listen 80;
    server_name api.${DOMAIN_NAME};

    location / {
        proxy_set_header Host      \$host; 
        proxy_set_header X-Forwarded-Proto \$scheme; 
        proxy_pass http://127.0.0.1:${DJANGO_PORT};
    }
    location /static {
        proxy_set_header X-Forwarded-Proto \$scheme; 
        root ${PATH_TO_BACKEND};
    }
    location /media {
        proxy_set_header X-Forwarded-Proto \$scheme; 
        root ${PATH_TO_BACKEND};
    }
}" >| "nginx/${PROJECT_NAME}.conf"

# Fill systemd config
# API / Django / python
echo "[Unit]
Description=Django, ${PROJECT_NAME} backend, Django daemon
After=network.target

[Service]
User=${USER_TO_RUN_GUNICORN}
Group=${USER_TO_RUN_GUNICORN}
Restart=on-failure
RestartSec=10
WorkingDirectory=${PATH_TO_BACKEND}
ExecStart=${BASE_DIR}/env/env/bin/gunicorn \\ 
    --error-logfile ${BASE_DIR}/env/systemd/log/django.error.log \\
    --access-logfile ${BASE_DIR}/env/systemd/log/django.access.log \\
    --workers ${GUNICORN_WORKERS_COUNT} \\
    --bind 127.0.0.1:${DJANGO_PORT} config.wsgi:application  

[Install]
WantedBy=multi-user.target
" >| "systemd/${PROJECT_NAME}.django.service"

# FRONTEND / Next.js / node
echo "[Unit]
Description=Next.js, ${PROJECT_NAME} frontend, Next.js daemon
After=network.target

[Service]
User=${USER_TO_RUN_GUNICORN}
Group=${USER_TO_RUN_GUNICORN}
Restart=on-failure
RestartSec=10
WorkingDirectory=${PATH_TO_FRONTEND}
ExecStartPre=/usr/bin/npm install
ExecStartPre=/usr/bin/npm run build
ExecStart=/usr/bin/npm run start -- -p ${NEXT_PORT}

[Install]
WantedBy=multi-user.target
" >| "systemd/${PROJECT_NAME}.next.service"



# Make symbol links
# Nginx config
if [ ! -f "/etc/nginx/sites-enabled/${PROJECT_NAME}.conf" ]; then
    sudo ln -s ${BASE_DIR}/env/nginx/${PROJECT_NAME}.conf /etc/nginx/sites-enabled
fi

# Systemd / API / Django / python
if [ ! -f "/etc/systemd/system/${PROJECT_NAME}.django.service" ]; then
    sudo ln -s ${BASE_DIR}/env/systemd/${PROJECT_NAME}.django.service /etc/systemd/system
fi

# Systemd / FRONTEND / Next.js / node
if [ ! -f "/etc/systemd/system/${PROJECT_NAME}.next.service" ]; then
    sudo ln -s ${BASE_DIR}/env/systemd/${PROJECT_NAME}.next.service /etc/systemd/system
fi