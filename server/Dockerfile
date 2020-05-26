FROM node:lts-alpine

RUN apk add --update --no-cache git && apk add --no-cache --virtual .gyp python make g++

WORKDIR /home/node/app

COPY package.json package-lock.json /home/node/app/

RUN npm install

COPY . /home/node/app/

EXPOSE 3333

CMD sh -c 'node ace build --production && cd build && npm ci --production && node server.js'