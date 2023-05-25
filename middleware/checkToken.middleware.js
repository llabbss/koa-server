/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-25 14:27:14
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 15:38:33
 * @FilePath: /server/middleware/checkToken.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require("jsonwebtoken");
const Config = require("../config/config");
const config = new Config();

async function check(ctx, next) {
  const url = ctx.url.split("?")[0];
  if (["/login", "/register"].includes(url)) {
    await next();
  } else {
    // 否则获取到token
    const tokenBk = ctx.request.headers["authorization"];
    const token = tokenBk.replace("Bearer  ", "");
    if (token) {
      // 如果有token的话就开始解析
      const tokenItem = jwt.verify(token, config.secretKey);
      // 将token的创建的时间和过期时间结构出来
      const { exp } = tokenItem;
      // 拿到当前的时间
      const data = new Date().getTime();
      // 判断一下如果当前时间减去token创建时间小于或者等于token过期时间，说明还没有过期，否则过期
      if (exp - data <= 0) {
        // token没有过期
        await next();
      } else {
        ctx.body = {
          status: 405,
          message: "token 已过期，请重新登陆"
        };
      }
    }
  }
}
module.exports = check;
