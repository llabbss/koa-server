const Router = require("koa-router");
const home = new Router();
home.get('/', async ctx => {
	ctx.body = '首页'
})
home.get('/banner', async ctx => {
	ctx.body = '首页轮播图'
})
home.get('/footer', async ctx => {
	ctx.body = '首页底部'
})
module.exports = home;