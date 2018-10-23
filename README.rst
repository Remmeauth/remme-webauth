REMME Webauth testnet
====================

Requirements
-----------------
This is a `demo website <https://webauth-testnet.remme.io>`_ project for showing how to use passwordless web authentication with REMME certificate.

Setup
====================

Requirements
-----------------
* docker >= 17.05.0
* docker-compose >= 1.18.0

Installation
-----------------

Clone REMME WebAuth Demo repository into a directory on your server. ::

  git clone https://github.com/Remmeauth/remme-webauth-testnet.git

Open the repository and create a certificates folder. ::

  cd remme-webauth-testnet
  mkdir certificates

You have to upload the certificate and private key to this folder (certificate.crt, private.key). These files are needed to configure ssl.

Change ngnix.conf using the config file, replace directories path and server domain name.

If you are going to connect demo to your own node you should cnange "NODE_ADDRESS" in nginx.conf file:

  | location /api/v1/ {
  |   proxy_set_header        Host $host;
  |   proxy_pass          http://NODE_ADDRESS:8080;
  |   proxy_read_timeout  90;
  | }

Lastly, run docker-compose up and Compose will start and run app. ::

  docker-compose up
