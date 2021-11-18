# **Source code of STETI**

Source code of Sambir collage of economics and information technologies.

## **Briefly about the website**

This website consists of two parts:

1. **Backend**, written in [Python](https://python.org/ "Python website"), more about backend read [here](./backend/README.md "Backend documentation").  
2. **Frontend**, written in [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JS website"), more about frontend read [here](./frontend/README.md "Backend documentation").  

## **Fast setup for development**


- go to the [./env](./env "link to the env dir") directory:

    ```shell
    cd env
    ```

- in the same [dir](./env "link to the env dir") run [./install.sh](./env/install.sh "link to the install.sh file") file:

    ```shell
    . ./install.sh
    ```

- in the same [dir](./env "link to the env dir") activate env for django:

    ```shell
    source env/bin/activate
    ```

- go to the [./backend](./backend "link to the env dir") directory and run server

    ```shell
    python3 manage.py runserver
    ```

## **Server setup**


- go to the [./env](./env "link to the env dir") directory:

    ```shell
    cd env
    ```

- and run [./deployment.sh](./env/deployment.sh "link to the deployment.sh file") file:

    ```shell
    . ./deployment.sh
    ```

- if you didn't launched ./install.sh file, you need enter needed data, like:

  - domain name
  - uset to run gunicorn
  - project state

- also you needing to enter passwoed to make sumbol links for server files
- probably after that the server will be configured
