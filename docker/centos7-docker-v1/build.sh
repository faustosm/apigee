#! /usr/bin/env bash

# construa a imagem com base no Dockerfile e nomeie-a `apigee`
docker build -t apigee .

# confimar se foi feito o build da imagem
docker images

# iniciar o container
docker run -it apigee bash