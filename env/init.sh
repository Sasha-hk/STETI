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
	
	###########
	# URL ROUTING #
	###########
	
	location /admin {
		proxy_pass http://django_backend;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for
		proxy_set_header Host $host;
		proxy_redirect off
	}
	
	location /api {
		proxy_pass http://django_backend;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $host;
		proxy_redirect off;
	}
	
	###########
	# STATIC FOLDER ROUTING 
	###########
	
	location /static/admin/ {
		alias /usr/src/app/django_files/static/admin/;
	}
	
	location /static/rest_framework/ {
		alias /usr/src/app/django_files/static/rest_framework/;
	}
	
	location /static/ {
		alias $base_dir/backend/static;
	}
	
	location /media/ {
		alias $base_dir/backend/media;
	}
	
	###########
	# URL ROUTING #
	###########
	
	location / {
		proxy_pass http://react_frontend;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $host;
		proxy_redirect off;
	}
}" >> nginx/$project_name


## systemd / Gunicorn
echo "[Unit]
Description=gunicorn socket
[Socket]
ListenStream=http://localhost:8000
[Install]
WantedBy=sockets.target" >> systemd/$project_name.django.socket

echo "[Unit]
Description=gunicorn daemon
Requires=$project_name.socket
After=network.target
[Service]
User=$user_to_run_gunicorn
Group=$user_to_run_gunicorn
WorkingDirectory=$base_dir/backend
ExecStart=$base_dir/env/env/bin/gunicorn --error-logfile $base_dir/env/systemd/log/error.log --access-logfile $base_dir/env/systemd/log/access.log --workers $gunicorn_workers_count  --bind unix:$path_to_sock_file config.wsgi:application  
[Install]
WantedBy=multi-user.target" >> systemd/$project_name.django.service

# next.js system
echo "[Unit]
Description=NodeJS server, NextJS public frontend
After=network.target

[Service]
Type=simple
User=$user_to_run_gunicorn
Group=$user_to_run_gunicorn
Restart=on-failure
RestartSec=10
WorkingDirectory=$base_dir/frontend
ExecStartPre=/usr/bin/npm install
ExecStartPre=/usr/bin/npm run build
ExecStart=/usr/bin/npm run start

[Install]
WantedBy=multi-user.target" >> systemd/$project_name.next.service


# Creating a symbolic link for server files

su -c "ln -s $PWD/nginx/$project_name /etc/nginx/sites-enabled"

su -c "ln -s $PWD/systemd/$project_name.django.socket /etc/systemd/system" 
su -c "ln -s $PWD/systemd/$project_name.django.service /etc/systemd/system"  
su -c "ln -s $PWD/systemd/$project_name.next.service /etc/systemd/system"  

su -c "service nginx restart"
su -c "systemctl daemon-reload"
su -c "systemctl enable $project_name" 
su -c "systemctl restart $project_name" 