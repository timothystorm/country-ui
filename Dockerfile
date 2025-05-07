# Phase 1: Build app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm set strict-ssl false
RUN npm install
COPY . .
RUN npm run build --prod

# Phase 2. Serve with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/countries-ui/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
