FROM mhart/alpine-node:11 AS builder

MAINTAINER Antoine Laget <antoine.laget@epietch.eu>

WORKDIR /app

COPY . .

RUN yarn install && yarn run build

FROM mhart/alpine-node

RUN yarn global add serve

ADD . /app

WORKDIR /app

COPY --from=builder /app/build .

CMD ["serve", "-p", "80", "-s", "."]