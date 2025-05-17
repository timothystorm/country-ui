FROM nginx:alpine

# copy app files into the image
COPY dist/countries-ui/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose the http port
EXPOSE 80
