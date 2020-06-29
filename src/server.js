const config = require('./config')
const app = require('./app')

async function main () {
  return Promise.all([
    config.read(),
    app()
  ])
    .then(([conf, app]) => {
      return app.listen(conf.server.port)
    })
    .then(x => {
      console.log('Started server')
      return x
    })
}

main()
  // .then(console.log)
  .catch(console.err)
