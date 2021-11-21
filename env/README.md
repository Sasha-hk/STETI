# **Server configuration**

Server technologies:

- [Nginx](https://nginx.org/ "Nginx website")
- [Gunicorn](https://gunicorn.org/ "Gunicorn website")

## **About the scripts**

**[./install.sh](./install.sh)** - the script setup envinronment for development and for deployment.

The script do:

- ask to enter needed data for .env file
- create .env file to storage nedded variables
- create venv for python
- update pip
- install requirements from [./requirements.txt](./requirements.txt "requirements.txt file")
- install packages for node

**[./deployment.sh](./deployment.sh)** - the script setup server.

The script do:

- run [./install.sh](./install.sh)
- check if installed needed packages
- created needed dirs
- created files for nginx config and serviced
- fill the files
- created symbol links for the files

**Tutorial** how to use the scripts you can find int the places:

- [for development](../README.md#fast-setup-for-development)
- [server setup](../README.md#server-setup)

## **About .env file**

File created by ./install.sh script, will be **created once when you first run the script.**</br>
In the file .env we store variables:

- base dir - dir to root of the project in server file system
- project name - the name we use to create unique file name for server files
- domain name
- user to run gunicorn
- django secret key
- JWT keys
- project stat (development / production)
- django port - port in production, use in the nginx ocnfig
- next port - port in production, use in the nginx ocnfig
- path to backend - in the server file system
- path to frontend - in the server file system
- public api url (dev/prod)

After creating .env file you can change values if you need. </br>
For example, you can change the value of the PROJECT_STATE variable to a value:

- development
- production

It will be looks like:

```txt
PROJECT_STATE='development'
```

or

```txt
PROJECT_STATE='production'
```
