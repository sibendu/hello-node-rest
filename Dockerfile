FROM node:8.15.1-jessie
COPY server.js .
COPY package*.json ./
CMD node server.js
