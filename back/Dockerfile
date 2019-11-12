FROM node

MAINTAINER Clement Chaptal <clement.chaptal@epitech.eu>  

RUN apt-get update

COPY . /app

WORKDIR /app

RUN npm i

EXPOSE 3300

CMD [ "node", "server.js"]