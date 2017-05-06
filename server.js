const dev = process.env.NODE_ENV !== 'production'
const moduleAlias = require('module-alias') // eslint-disable-line import/order
const join = require('path').join

if (!dev) {
	moduleAlias.addAlias('react', 'preact-compat')
	moduleAlias.addAlias('react-dom', 'preact-compat')
}

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {
		createServer((req, res) => {
			const parsedUrl = parse(req.url, true)
			const rootStaticFiles = { '/googleab6bbbacf5b51a92.html': true }
			if (rootStaticFiles[parsedUrl.pathname]) {
				const path = join(__dirname, 'static', parsedUrl.pathname)
				app.serveStatic(req, res, path)
			} else {
				handle(req, res, parsedUrl)
			}
		}).listen(3000, err => {
			if (err) {
				throw err
			}
			console.log('> Ready on http://localhost:3000')
		})
	})
