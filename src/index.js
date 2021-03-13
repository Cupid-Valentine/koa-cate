const koa = require('koa');
const path = require('path')
const helmet = require('koa-helmet');
const statics = require('koa-static')
const app = new koa();

const router = require('./routes/routes');
app.use(helmet());
console.log(path.join(__dirname, '../public'))
app.use(statics(path.join(__dirname, '../public')))
app.use(router());
app.listen(3000);
