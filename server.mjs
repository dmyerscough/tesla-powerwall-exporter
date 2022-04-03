import express from 'express'
import client from 'prom-client'
import Tesla from "./src/tesla.mjs";
import updateMetrics from "./src/utils.mjs"

const app = express()

app.use(express.json())

app.get("/metrics", async (req, res) => {
  res.set('Content-type', client.register.contentType)
  res.status(200).send(await client.register.metrics())
});

const PORT = parseInt(process.env.PORT) || 8080
const SCRAPE_INTERVAL = parseInt(process.env.SCRAPE_INTERVAL) || 30000

try {
  const tesla = new Tesla(process.env.EMAIL, process.env.PASSWORD)
  await tesla.login()

  app.listen(PORT, () => {
    console.log(`Listening on 0.0.0.0:${PORT}`)
  })

  // Perform an initial scrape of the Powerwalls
  await updateMetrics(tesla)

  setInterval(updateMetrics, SCRAPE_INTERVAL, tesla)

} catch (error) {
  console.error(error)
  process.exit(1)
}

