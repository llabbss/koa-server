/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-15 14:04:24
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 14:38:15
 * @FilePath: /server/app/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require("koa2");
const cors = require("koa2-cors");
const path = require("path");
// const convert = require("koa-convert");
const bodyParser = require("koa-bodyparser");
// const proxy = require("koa-proxy");
// const logger = require("koa-logger");
const static = require("koa-static");
const router = require("../router/index");
const formatRes = require("../middleware/formatRes.middleware");
const checkToken = require("../middleware/checkToken.middleware");
const app = new Koa();
// 配置环境变量
require("dotenv").config({ path: ".env" });

// 允许前端跨域请求
app.use(
  cors({
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
    allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"] //设置获取其他自定义字段
  })
);
app.use(static(path.join(__dirname + "/assets")));

app.use(async (ctx, next) => {
  console.log(`${ctx.method}`, `${ctx.url}`);
  await next();
});

app.use(
  bodyParser({
    multipart: true
  })
);
app.use(checkToken);
app.use(formatRes);
/**
 * @params routes 的作用是启动路由
 * @params allowedMethods 允许所有请求方法
 */

app.use(router.routes()).use(router.allowedMethods());
// app.use(async (ctx, next) => {
//   // 返回数据给页面
//   ctx.response.body = "hello koa";
//   try {
//     await next();
//   } catch (error) {
//     ctx.body = err.message;
//     ctx.status = error.status || 500;
//     ctx.app.emit("error", error, ctx);
//   }
// });

app.on("error", (err, ctx) => {
  ctx.throw("400", err.message);
});
module.exports = app;
// ? 1、创建表 sql语句
// CREATE TABLE `banner`(
// `id` INT PRIMARY KEY AUTO_INCREMENT,
// `imgUrl` varchar(100) COMMENT '轮播图地址'
// );

// ? 2、创建完表以后需要 DESCRIBE 一下表

// ? 插入数据，因为表中有2个字段：id, imgUrl, 所以values里面对应的是这些字段值
// ? insert into banner values(1, '/server/assets/iShot_2022-05-29_15.40.54.png');
// ? 只需要增加一个imgUrl字段值不需要修改id insert into banner (imgUrl) values('/server/assets/iShot_2022-05-29_15.40.54.png')
