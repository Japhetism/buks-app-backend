FROM node:12-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm cache clean --force
COPY . /app
CMD node server.js
EXPOSE 8081