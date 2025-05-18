## 🐳 Running in a container

### 1. 🛠️ Build the app

```bash
npm run build
```

### 2. 🕸️ Build network bridge

Only needs to be built 1x.

> Need to create a network bridge to allow for cross container communication

```bash
./build-network-bridge.sh country-net
```

### 3. 🚀 Build and run container

```bash
docker compose up --build -d 
```

> - The ui is served by NGINX on port 80
> - The api is reverse proxied through NGINX on port 8080

### 4. 🛑 Stop the container

```bash
docker compose down
```

### 5. 🪓 Stop network bridge (optional)

```bash
docker network rm country-net
```
