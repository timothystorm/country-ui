#!/bin/bash
# Creates a docker network bridge so the ui can communicate with the api in the same docker environment

set -e

# must match the network name of the api
NETWORK_NAME="${1:-country-network}"

if ! docker network inspect "$NETWORK_NAME" >/dev/null 2>&1; then
  echo "🔌 Creating Docker network: $NETWORK_NAME"
  docker network create "$NETWORK_NAME"
else
  echo "✅ Docker network '$NETWORK_NAME' already exists"
fi
