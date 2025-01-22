
FROM node:20.18-alpine3.20

# create/choose destination directory
RUN mkdir -p /usr/src/zealthy-server
WORKDIR /usr/src/zealthy-server

# Update and install dependency
RUN apk update && apk upgrade
RUN apk add git
# docker-compose bash command dependency
RUN apk add bash

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

# Install app dependencies
COPY ./package.json .
RUN npm install

# Bundle app source
COPY . .

# run backend-zealthy
CMD npm run start:watch

