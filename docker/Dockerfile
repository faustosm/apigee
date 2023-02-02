FROM node:latest
LABEL maintainer="https://github.com/faustosm"

RUN npm install -g apigeelint
RUN npm install -g npm@9.4.0

COPY apigee .

RUN chmod +x apigeelint_plugin.sh