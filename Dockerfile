FROM node:8.9-alpine

RUN apk add --update --no-cache \
    python \
    python-dev \
    py-pip \
    bash \
    build-base \
    && pip install --upgrade pip \
    && hash -r pip \
    && pip install virtualenv

WORKDIR /app

COPY ./remme-webauth-server/package.json ./package.json
RUN npm install

COPY ./remme-webauth-server/src ./src
RUN npm run build

COPY ./remme-webauth-server/.env ./.env

CMD ["node", "src/index.js"]
