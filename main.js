/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-24 10:42:23
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-24 15:06:28
 * @FilePath: /server/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const app = require('./app/index.js')

app.listen(process.env.PORT, () => {
  // 监听成功的回调
  console.log(`server is running:http://localhost:${process.env.PORT}`)
})
