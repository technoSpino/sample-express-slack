FROM node:lts-alpine

COPY package*.json ./
  
WORKDIR '/var/www/app'

RUN npm install

COPY . .

EXPOSE 3000
