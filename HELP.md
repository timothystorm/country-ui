# Runners

## 🚀 Running in a Docker container

```bash
./build-network-bridge.sh && docker compose up -d --build
```

> Need to create a network bridge to allow for cross container communication
> The ui app is served via NGINX on port 80

## 🛑 Stop dockerized

```bash
docker compose down
```

