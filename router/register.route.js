/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-24 15:01:47
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 10:54:03
 * @FilePath: /server/router/register.route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const errorTypes = require("../constant/error.type");
const UserService = require("../service/user.service");

const register = new Router();
const { UserCreateError } = errorTypes;

const { createUser } = UserService;
register.use(bodyParser());
register.post("/", async ctx => {
  if (ctx.request.body.userName && ctx.request.body.password) {
    const username = ctx.request.body.userName;
    const password = ctx.request.body.password;
    const res = await createUser(username, password);
    ctx.body = res;
  } else {
    ctx.body = UserCreateError;
  }
});

module.exports = register;
