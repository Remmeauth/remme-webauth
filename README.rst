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

Open repository with frontend and build the app for production to the build folder. ::

  cd remme-webauth-client
  npm install
  npm build

 Install backend dependencies and run it. ::

  cd remme-block-explorer-backend
  npm install
  npm start

Change ngnix.conf using the config file, replace directories path and server domain name. Then Restart nginx. ::

  systemctl restart ngnix
