#!/bin/bash
cd "$(dirname "$0")" || exit

image_name="angular-image"
container_name="countries-ui"

# build the latest image
docker build -t $image_name ./..

# Remove existing container if it exists
docker rm -f $container_name 2>/dev/null || true

# Run the Docker container
docker run --name $container_name -p 4200:80 -d $image_name
echo "Docker container '$container_name' started successfully."
