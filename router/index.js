/**
 * @description: 路由入口文件
 * @return {*}
 */
const Router = require("koa-router");
const router = new Router();
const fs = require("fs");
// 需要使用nodejs的fs模块，来进行文件的读取和引入
fs.readdirSync(__dirname).forEach(file => {
  // 读取当前目录下的文件['user.route.js','order.route.js']
  if (file !== "index.js") {
    const currentFile = require("./" + file);
    // 注册路由
    router.use(
      `/${file.split(".")[0]}`,
      currentFile.routes(),
      currentFile.allowedMethods()
    );
  }
});

module.exports = router;
