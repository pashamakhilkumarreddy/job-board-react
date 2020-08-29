const Koa = require('koa');
const bodyParser = require('koa-body');
const cors = require('@koa/cors')
const helmet = require('koa-helmet');
const compression = require('koa-compress');
const responseTime = require('koa-response-time')
const rateLimit = require('koa-ratelimit');
const logger = require('koa-logger');

const app = new Koa();
const db = new Map();

app
  .use(logger())
  .use(bodyParser())
  .use(cors())
  .use(helmet())
  .use(compression())
  .use(responseTime({
    hrtime: true,
  }))
  .use(rateLimit({
    driver: 'memory',
    db,
    duration: 10000,
    errorMessage: 'Too many requests',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    max: 300,
    disableHeader: false,
  }));

const {
  PORT
} = require('./config').server;

app.listen(PORT, () => {
  console.info(`The server is up and running on ${PORT}`)
});