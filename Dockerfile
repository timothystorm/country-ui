# Phase 1: Serve with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/countries-ui/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
