FROM node

MAINTAINER Clement Chaptal <clement.chaptal@epitech.eu>  

RUN apt-get update

COPY . /app

WORKDIR /app

RUN yarn global add serve

RUN yarn install

RUN yarn build

EXPOSE 80

CMD [ "serve", "-s", "build", "-l", "80"]