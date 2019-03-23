FROM node:8.15.1-jessie
COPY server.js .
CMD node server.js
