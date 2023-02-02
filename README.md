### Objetivo

POC do lint do apigee nas pipelines do CI;

Criar um stage apartado, sem bloqueios;

---
### Links úteis:

https://www.npmjs.com/package/apigeecli

https://github.com/apigee/apigeelint

https://docs.apigee.com/api-platform/antipatterns/intro

---
### Tutorial usado para teste:

https://eduandrade.hashnode.dev/how-to-develop-external-plugins-for-apigeelint

---
### Imagem já personalizada, pronta pra testar o apigeelint

    docker pull faustosm/poc-apigeelint:1.0

    docker run -it faustosm/poc-apigeelint:1.0 bash

### Depois que entrar no container, basta rodar o script abaixo para realizar o test do plugin apigeelint

    ./apigeelint_plugin.sh

---
### Exemplo do teste do plugin apigeelint:

![alt text](https://github.com/faustosm/poc-apigee/blob/main/image/apigeelint.png)

