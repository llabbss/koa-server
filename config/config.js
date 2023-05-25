/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-23 15:32:42
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 14:09:40
 * @FilePath: /server/config/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { get, set, has } = require("lodash");
module.exports = class Config {
  store = {};
  proxy = {
    enabled: true,
    options: {}
  };
  baseDir = process.cwd();
  constructor() {
    this.secretKey = "SYWH";
  }
  getItem(itemKey) {
    get(this.store, itemKey);
  }
  setItem(itemKey, value) {
    set(this.store, itemKey, value);
  }
  hasItem(itemKey) {
    has(this.store, itemKey);
  }
  getConfigFromFile(filepath) {
    const mod = require(path.resolve(this.baseDir, filepath));
    this.store = merge(this.store, mod);
  }
};
