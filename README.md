# 🌐 Country UI

A frontend Angular application for interacting with the Country API. This UI is containerized and served via NGINX, and designed for seamless deployment to cloud environments like AWS EC2 and Azure Virtual Machines.

---

## ✨ Features

- Built with Angular and TypeScript
- Serves a static Single Page Application (SPA) via NGINX
- Consumes the Spring Boot Country API backend
- Fully Dockerized for local development and cloud deployment
- Environment-based base API URL configuration
- Reverse proxies API calls for CORS security

---

## 🛠️ Tech Stack

| Layer      | Tech               |
|------------|--------------------|
| Framework  | Angular 17+        |
| Web Server | NGINX              |
| Container  | Docker             |
| Deployment | AWS EC2 / Azure VM |

---

🐳 Running as a Dockerized NGINX App

1. Build the Angular App

```bash
npm run build -- --configuration=production
```

This compiles the app into the dist/ directory.

2. Build and Run the Docker Container

```bash
docker build -t country-ui .
docker run -d -p 80:80 country-ui
```

> The app is served via NGINX on port 80 inside the container.

---

## 🌍 Cloud Deployment

This project is designed for on-demand deployment to cloud VMs with Docker:

✅ Compatible With:

- AWS EC2 (Ubuntu + Docker)
- Azure Virtual Machine (Ubuntu + Docker)

🔐 Secure Configuration

- No credentials are stored in the repo
- Base API URL is configured in environment.prod.ts and bundled at build time

--- 

## 💡 Skills Demonstrated

- Angular architecture and TypeScript usage
- Docker multi-stage build for optimized production images
- Static site hosting via NGINX
- Cloud deployment readiness for multiple platforms
- Environment-based configuration and secure API interaction

---

## 🔭 Future Enhancements

- Add automated deployment via GitHub Actions
- Add integration testing
- Support environment variables at runtime with JS-based dynamic config injection
- HTTPS via Let’s Encrypt on the VM

---

## 🧠 Why This Project?

This frontend demonstrates frontend-backend integration in a realistic, cloud-native
architecture — showcasing frontend development, containerization, and deployment readiness.
