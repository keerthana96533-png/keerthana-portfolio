import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3001

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'keerthana-portfolio' })
})

app.listen(port, () => {
  console.log(`Portfolio API listening on http://localhost:${port}`)
})
