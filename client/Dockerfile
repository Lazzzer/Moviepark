FROM node:12.16.3-alpine

WORKDIR /home/node/app

COPY package.json package-lock.json /home/node/app/

RUN npm install --ignore-scripts

COPY . /home/node/app/

EXPOSE 3000

CMD sh -c 'npm run build && npm run start'