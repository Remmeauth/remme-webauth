# REMME Webauth

This is a [Demo Website](https://webauth-testnet.remme.io/) project for showing how to use passwordless web authentication with REMME certificate.

# Setup (ubuntu)
### Requirements
- docker >= 17.05.0
- docker-compose >= 1.18.0
- node.js
- npm

### Installation
Clone REMME WebAuth Demo repository into a directory on your server.

```sh
$ git clone https://github.com/Remmeauth/remme-webauth.git
```

Open the repository and create a certificates folder.
```sh
$ cd remme-webauth
$ mkdir certificates
```
You have to upload the certificate and private key to this folder (certificate.crt, private.key). These files are needed to configure ssl.

Change ngnix.conf using the config file, replace directories path and server domain name. If you are going to connect demo to your own node you should also change the node address:
```sh
location /api/v1/ {
    proxy_set_header Host $host;
    proxy_pass http://YOUR_NODE_ADDRESS:8080;
    proxy_read_timeout 90;
}
```
Then you have to set the DNS name of your server for the "host" variable in /remme-webauth-client/src/config/index.js.

```sh
const host = 'yourdomain.com'
```
Then rebuild client.

```sh
$ cd /remme-webauth/remme-webauth-client
$ npm run build
```
Set the node address in /remme-webauth/remme-webauth-server/.env.
```sh
NODE_ADDRESS="YOUR_NODE_ADDRESS"
```
*If your node was installed on localhost you should use the local IP address instead "localhost".
Lastly, run docker-compose up and Compose will start and run app.
```sh
$ docker-compose up
```
