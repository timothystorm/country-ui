# Runners

## 🐳 Running as a Dockerized NGINX App

```bash
docker compose -f docker-compose.yaml up -d --build
```

> The app is served via NGINX on port 80 inside the container.

## Stop dockerized

Bring down the dockerized

```bash
docker compose -f ../docker-compose.yaml down
```

