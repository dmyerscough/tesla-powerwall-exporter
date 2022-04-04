
## Configuration

```bash

```

## Setup

```bash
$ export TESLA_ADDR="192.168.0.3"
$ export TESLA_EMAIL="damian@example.com"
$ export TESLA_PASSWORD="MySecretPassword"
```

## Docker

```bash
docker run \
  -p 8080:8008 \
  -e TESLA_ADDR="192.168.0.3" \
  -e TESLA_EMAIL="damian@example.com" \
  -e TESLA_PASSWORD="MySecretPassword" \
  prometheus-tesla:0.0.1
```

