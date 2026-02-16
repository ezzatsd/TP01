# TP01 - Bases Docker (Image, Dockerfile, Volume, Network, Docker Compose)


![docker network rm mon-net +  docker run -d --name redis redis:latest + docker network create mon-net + docker network connect mon-net redis ](image.png)

![docker network inspect mon-net](image-1.png)

![docker build -t mesapps/app01 . + docker images ](image-2.png)

![docker run -d --name app01 --network mon-net -p 8080:8080 mesapps/app01 + docker ps](image-3.png)

![Hello everyone! I have processed 1 requests.](image-4.png)

![Hello everyone! I have processed 2 requests.](image-5.png)

![Hello everyone! I have processed 3 requests.](image-6.png)

![docker container exec -it app01 /bin/sh](image-7.png)

![docker rm -vf redis + docker rm -vf app01 + docker network rm mon-net](image-8.png)

![docker compose up -d + docker ps](image-9.png)

![Hello everyone! I have processed 1 requests.](image-10.png)

![docker compose stop + docker compose rm](image-11.png)

![docker compose up -d + docker ps](image-12.png)

![WordPress](image-13.png)

![WordPress](image-17.png)

![PhpMyAdmin](image-14.png)

![Docker compose stop + docker compose rm + docker compose up -d](image-15.png)

![Vérifiez que le déploiement est réussi en se connectant à l’adresse suivante :](image-16.png)

![docker compose stop + docker compose rm](image-18.png)