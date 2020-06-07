FROM mhart/alpine-node

MAINTAINER Antoine Laget <antoine.laget@epietch.eu>

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3300

CMD ["npm", "start"]