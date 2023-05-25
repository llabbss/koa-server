/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-24 10:56:52
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-24 15:45:44
 * @FilePath: /server/db/seq.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { Sequelize } = require("sequelize");
const { HOST, PORT /*等等需要的配置*/ } = process.env;

// 实例化sequelize对象
const seq = new Sequelize("gov-admin-manage", "root", null, {
  dialect: "mysql" // 要操作的数据库类型
});

// 实例化过后就进行连接
seq
  .authenticate()
  .then(res => {
    console.log(res, "连接成功的回调");
  })
  .catch(err => {
    console.log(err, "连接失败的回调");
  });

module.exports = seq;
