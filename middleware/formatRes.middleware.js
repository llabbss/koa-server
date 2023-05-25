/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-25 09:45:43
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 09:56:57
 * @FilePath: /server/middleware/formatRes.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const formatRes = async (ctx, next) => {
  try {
    // 让其他中间件处理请求
    await next();
    // 如果没有返回数据，说明是 404
    if (ctx.body === undefined) {
      ctx.body = {
        code: -1,
        message: "请求的资源不存在"
      };
    }
    // 如果返回的数据有 code 字段，说明是标准格式的响应数据
    else if (typeof ctx.body === "object" && ctx.body.hasOwnProperty("code")) {
      ctx.body = {
        code: ctx.body.code,
        message: ctx.body.message,
        data: ctx.body.data
      };
    }
    // 如果返回的数据没有 code 字段，说明是非标准格式的响应数据
    else {
      ctx.body = {
        code: 0,
        message: "请求成功",
        data: ctx.body
      };
    }
  } catch (err) {
    // 如果出错，返回标准格式的错误响应数据
    ctx.body = {
      code: -1,
      message: err.message
    };
  }
};
module.exports = formatRes;
