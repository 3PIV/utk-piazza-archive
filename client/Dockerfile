  
FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN yarn install

COPY . .

EXPOSE 49300

CMD [ "npm", "serve" ]
