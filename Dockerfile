FROM node:19-alpine
MAINTAINER totalplatform "info@totaljs.com"

VOLUME /www/
WORKDIR /www/
RUN mkdir -p /www/bundles/

COPY index.js .
COPY config .
COPY package.json .
COPY database.sql .
COPY app.bundle ./bundles/

RUN npm install
EXPOSE 8000

CMD [ "npm", "start" ]