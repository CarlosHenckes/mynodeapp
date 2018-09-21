FROM node:8
WORKDIR /app
COPY package.json /usr/src/docker/
RUN npm install
COPY . /usr/src/docker/
CMD node server.js
EXPOSE 8087