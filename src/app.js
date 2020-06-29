const Koa = require('koa')
const path = require('path')
const Pug = require('koa-pug')

const app = new Koa()

const pug = new Pug({
  viewPath: path.resolve(__dirname, '../views'),
  app: app
})

pug.locals.name = 'project-organizer'
pug.locals.version = require('../package.json').version

app.use(async ctx => {
  await ctx.render('home')
})

module.exports = async function (conf) {
  return app
}
