REMME Webauth testnet
====================

Requirements
-----------------
This is a `demo website <https://webauth-testnet.remme.io>`_ project for showing how to use passwordless web authentication with REMME certificate.

Setup
====================

Requirements
-----------------
* Nginx >= 1.13.5
* Nodejs >= 8.0.0
* MongoDB >= 4.0.2
* redis-server
* build-essential

Installation
-----------------

Clone REMME WebAuth Demo repository into a directory on your server. ::

  git clone https://github.com/Remmeauth/remme-webauth-testnet.git

Open repository with frontend and build the app for production to the build folder. ::

  cd remme-webauth-client
  npm install
  npm build

Install backend dependencies and run it. ::

  cd remme-webauth-backend
  npm install
  npm start

Change ngnix.conf using the config file, replace directories path and server domain name.

If you are going to connect demo to your own node you should cnange "NODE_ADDRESS" in nginx.conf file:

  | location /api/v1/ {
  |   proxy_set_header        Host $host;
  |   proxy_pass          http://NODE_ADDRESS:8080;
  |   proxy_read_timeout  90;
  | }

Then Restart nginx. ::

  systemctl restart ngnix
