#!/bin/bash
cd "$(dirname "$0")" || exit

docker compose -f ../docker-compose.yaml down
