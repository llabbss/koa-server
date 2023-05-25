/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-25 14:33:56
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 15:36:55
 * @FilePath: /server/router/account.route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const jwt = require("jsonwebtoken");
const Config = require("../config/config");
const UserService = require("../service/user.service");

const account = new Router();
const config = new Config();
const { getUser } = UserService;
account.use(bodyParser());
account.post("/userInfo", async ctx => {
  // 获取token并处理Bear trim化
  const bToken = ctx.request.headers["authorization"];
  const token = bToken.replace("Bearer  ", "");
  const { userId } = jwt.verify(token, config.secretKey);
  if (userId) {
    ctx.body = await getUser(userId);
  }
});

module.exports = account;
