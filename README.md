# 🌍 Country UI

A frontend Angular application for interacting with the Country API. This UI is containerized and served via NGINX, and designed for seamless deployment to cloud environments like AWS EC2 and Azure Virtual Machines.

repo: [country-ui](https://github.com/timothystorm/country-ui)

---

## 👷 Maintainers/Contributors

- Maintainer: [Timothy Storm](mailto:timothystorm@gmail.com)

---

## 🧩 Features

- Built with Angular and TypeScript
- Serves a static Single Page Application (SPA) via NGINX
- Consumes the Spring Boot Country API backend
- Fully Dockerized for local development and cloud deployment
- Proxied API URL configuration for local and production parity
- Reverse proxy with NGINX into API for the smallest possible surface area

---

## 🛠️ Tech Stack

| Layer      | Tech               |
|------------|--------------------|
| Framework  | Angular 17+        |
| Web Server | NGINX              |
| Container  | Docker             |
| Deployment | AWS EC2 / Azure VM |

---

## ☁️ Cloud Deployment

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

## 🤝 Conventions & Standards

- 🪾 [Trunk based development](https://trunkbaseddevelopment.com/)
  - short lived branches - no more than a week
- ✅ 90% Code coverage minimum to PR into main
- 🌵 [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- 🪟 [No broken windows](https://blog.codinghorror.com/the-broken-window-theory/)
  - treat warning like errors
  - all errors are treated as critical and to be fixed immediately
- 🩹 Refactoring is expected and is NOT a dirty word

---

## 🚧 Future Enhancements

- Add integration testing
- Support environment variables at runtime with JS-based dynamic config injection
- HTTPS via Let’s Encrypt on the VM
- Make the UI responsive

---

## 🧠 Why This Project?

This frontend demonstrates frontend-backend integration in a realistic, cloud-native
architecture — showcasing frontend development, containerization, and deployment readiness.
