Tesla Powerwall Exporter
------------------------

Prometheus exporter for Tesla Powerwall and Solar.

<img width="1509" alt="Tesla Powerwall Exporter" src="https://user-images.githubusercontent.com/1395617/161689141-b99a8905-b11f-4af6-ac67-7d24b3bb34a4.png">


## Installation and Usage

Building the Tesla Powerwall exporter can be done by running the following commands.

```bash
$ git clone https://github.com/dmyerscough/tesla-powerwall-exporter.git
$ cd tesla-powerwall-exporter
$ npm install
```

Once you have installed the required dependencies, export the following three environment variables. `TESLA_ADDR` is the
IP address of the Tesla Powerwall and the `TESLA_EMAIL` and `TESLA_PASSWORD` are used for authenticating.

```bash
$ export TESLA_ADDR="192.168.0.3"
$ export TESLA_EMAIL="damian@example.com"
$ export TESLA_PASSWORD="MySecretPassword"
$ npm run start
{"level":"info","message":"Scraping powerwall","timestamp":"2022-04-04T06:48:33.765Z"}
{"level":"info","message":"Listening on 0.0.0.0:8080","timestamp":"2022-04-04T06:48:33.768Z"}
{"level":"info","message":"Finished scraping powerwall","timestamp":"2022-04-04T06:48:34.342Z"}
...
...
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

