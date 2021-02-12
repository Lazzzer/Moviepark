#Build stage
FROM node:14-alpine as builder

RUN apk add --update --no-cache git && apk add --no-cache --virtual .gyp python make g++

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json /home/node/app/

RUN touch .env && npm ci

COPY --chown=node:node  . /home/node/app/

RUN node ace build --production && cd build && npm ci --production

#Run stage
FROM node:14-alpine as app

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/app/build ./build

EXPOSE 3333

CMD sh -c 'cd build && node ace migration:run --force && node server.js'