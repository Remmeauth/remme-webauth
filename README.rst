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
* node.js
* npm

Installation
-----------------

Clone REMME WebAuth Demo repository into a directory on your server. ::

  git clone https://github.com/Remmeauth/remme-webauth-testnet.git

Open the repository and create a certificates folder. ::

  cd remme-webauth-testnet
  mkdir certificates

You have to upload the certificate and private key to this folder (certificate.crt, private.key). These files are needed to configure ssl.

Change ngnix.conf using the config file, replace directories path and server domain name.
If you are going to connect demo to your own node you should also cnange the node address:

  | location /api/v1/ {
  |   proxy_set_header        Host $host;
  |   proxy_pass          http://YOUR_NODE_ADDRESS:8080;
  |   proxy_read_timeout  90;
  | }

Then you have to set the DNS name of your server for the "host" variable in /remme-webauth-client/src/config/index.js. ::

  const host = 'yourdomain.com'

Then rebuild client. ::

  cd /remme-webauth-testnet/remme-webauth-client
  npm run build

Set the node address in /remme-webauth-testnet/remme-webauth-server/.env. ::

  NODE_ADDRESS="YOUR_NODE_ADDRESS"

*If your node was installed on localhost you should use the local IP address instead "localhost".

Lastly, run docker-compose up and Compose will start and run app. ::

  docker-compose up
