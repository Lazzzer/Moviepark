FROM node:12.16.3-alpine

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json /home/node/app/

RUN npm install --ignore-scripts

COPY --chown=node:node . /home/node/app/

EXPOSE 3000

CMD sh -c 'npm run build && npm run start'