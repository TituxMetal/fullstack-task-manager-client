const next = require('next')

const server = require('./server/app')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('/_next/*', (req, res) => handle(req, res))
  server.get('/static/*', (req, res) => handle(req, res))
  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, err => {
    if (err) {
      throw err
    }
    console.log(`Running on http://localhost:3000`)
  })
})
