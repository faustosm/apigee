https://www.npmjs.com/package/apigeecli

https://github.com/apigee/apigeelint

https://docs.apigee.com/api-platform/antipatterns/intro






POC do lint do apigee nas pipelines do CI;

Fazer em caráter de teste com o time de integração;

Criar um stage apartado, sem bloqueios;

---

docker run -it --name apigee debian

docker run -it debian

docker run --name poc-apigee -it debian:10-slim /bin/bash
