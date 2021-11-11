#!/bin/bash

RED=`tput setaf 1`
GREEN=`tput setaf 2`
YELLOW=`tput setaf 3`
BLUE=`tput setaf 4`
PINK=`tput setaf 5`
CYAN=`tput setaf 6`
None=`tput sgr0`

domain_name=""
project_name="STETI"
user_to_run_gunicorn=""
gunicorn_workers_count=3 
base_dir="$(dirname "$PWD")"


# Get neded variables

echo -n "${CYAN}[add]${None} Enter domain name, for example 'google.com': "
read domain_name 

echo -n "${CYAN}[add]${None} Enter user name, to run gunicorn: "
read user_to_run_gunicorn

echo -n "${CYAN}[add]${None} Enter count of workers for gunicorn: "
read gunicorn_workers_count 



# Create and activate virtualenviroment

virtualenv env
# source env/bin/activate
. env/bin/activate
pip install -r requirements.txt



# Create and fill servir files

mkdir nginx systemd
mkdir -p systemd/log

path_to_sock_file="/run/$project_name.sock"
 


## NGINX
echo "upstream django_backend {
	server localhost:8000;
}

upstream react_frontend {
	server localhost:3000;
}

server {
	listen 80;

	server_name api.mipando.com.ua;

	location /static/ {
		alias /home/petryk/dev/STETI/backend/static;
	}
	
	location /media/ {
		alias /home/petryk/dev/STETI/backend/media;
	}

	location / {
		proxy_pass http://django_backend;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $host;
		proxy_redirect off;
	}
}

server {
	listen 80;

	server_name mipando.com.ua;
	
	location / {
		proxy_pass http://react_frontend;
	}
}
" >> nginx/$project_name


## systemd / Gunicorn
echo "[Unit]
Description=gunicorn daemon
After=network.target

[Service]
User=petryk
Group=petryk
WorkingDirectory=/home/petryk/dev/STETI/backend
ExecStart=/home/petryk/dev/STETI/env/env/bin/gunicorn --error-logfile /home/petryk/dev/STETI/env/systemd/log/error.log --access-logfile /home/petryk/dev/STETI/env/systemd/log/access.log --workers 3 --bind localhost:8000 config.wsgi

[Install]
WantedBy=multi-user.target
" >> systemd/$project_name.django.service

# next.js system
echo "[Unit]
Description=NodeJS server, NextJS public frontend
After=network.target

[Service]
Type=simple
User=petryk
Group=petryk
Restart=on-failure
RestartSec=10
WorkingDirectory=/home/petryk/dev/STETI/frontend
ExecStartPre=/usr/bin/npm install
ExecStartPre=/usr/bin/npm run build
ExecStart=/usr/bin/npm run start

[Install]
WantedBy=multi-user.target
" >> systemd/$project_name.next.service


# Creating a symbolic link for server files

su -c "ln -s $PWD/nginx/$project_name /etc/nginx/sites-enabled"

su -c "ln -s $PWD/systemd/$project_name.django.socket /etc/systemd/system" 
su -c "ln -s $PWD/systemd/$project_name.django.service /etc/systemd/system"  
su -c "ln -s $PWD/systemd/$project_name.next.service /etc/systemd/system"  

su -c "service nginx restart"
su -c "systemctl daemon-reload"
su -c "systemctl enable $project_name" 
su -c "systemctl restart $project_name" 