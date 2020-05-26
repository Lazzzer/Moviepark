FROM node:lts-alpine

WORKDIR /home/node/app

COPY package.json  /home/node/app/

RUN npm install

COPY . /home/node/app/

EXPOSE 3000

CMD sh -c 'npm run build && npm run start'