# Runners

## Run dockerized

Packages the app for _production_ and deploys it to a ngix container on port '80';

```bash
docker compose -f docker-compose.yaml up -d --build
```

## Stop dockerized

Bring down the dockerized

```bash
docker compose -f ../docker-compose.yaml down
```
