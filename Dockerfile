FROM ubuntu:latest

WORKDIR /usr/src/app

COPY . .
RUN apt-get update && \
    apt-get install -y nodejs npm

EXPOSE 3000

CMD ["npm", "start"]
