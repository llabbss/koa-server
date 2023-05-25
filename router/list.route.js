/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-15 14:04:24
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-24 15:35:56
 * @FilePath: /server/router/list.route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 这里是关于列表的所有接口
const Router = require("koa-router");
const list = new Router();

list.get("/", async (ctx) => {
  ctx.body = "列表";
});
list.get("/yinger", async (ctx) => {
  ctx.body = "列表---婴儿";
});
list.get("/wangju", async (ctx) => {
  ctx.body = "列表---网剧";
});

module.exports = list;
