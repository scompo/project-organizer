const Koa = require('koa')
const Router = require('@koa/router')
const logger = require('koa-pino-logger')
const path = require('path')
const Pug = require('koa-pug')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
	await ctx.render('home')
})

const pug = new Pug({
	viewPath: path.resolve(__dirname, '../views'),
	app: app
})

pug.locals.name = 'project-organizer'
pug.locals.version = require('../package.json').version

app  .use(logger())
	.use(router.routes())
	.use(router.allowedMethods())

module.exports = async function (conf) {
	return app
}
