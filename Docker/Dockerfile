FROM node:19-alpine3.16

COPY package.json app/ 
COPY Docker /app/

WORKDIR /app

RUN npm install

CMD [ "node", "server.js"]