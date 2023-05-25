/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-24 10:47:34
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 15:29:59
 * @FilePath: /server/constant/error.type.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const errorTypes = require("../config/codeMessage");
module.exports = {
  UserValidError: {
    code: "10001",
    message: "用户校验失败",
    data: ""
  },
  UserCreateError: {
    code: "10000",
    message: "用户创建失败",
    data: ""
  },
  UserLoginError: {
    code: "10002",
    message: "用户登录失败",
    data: ""
  },
  UserNotFound: {
    code: "10021",
    message: errorTypes["10021"],
    data: ""
  }
};
