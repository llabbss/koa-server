/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-24 10:44:45
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-06-01 10:43:47
 * @FilePath: /server/service/user.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const errorTypes = require("../constant/error.type");
const Config = require("../config/config");
const bcrypt = require("bcrypt");

const config = new Config();
const { UserCreateError, UserNotFound, UserLoginError } = errorTypes;
class UserService {
  // 处理创建用户的service
  async createUser(username, password) {
    const { secretKey } = Config;
    const salt = await bcrypt.genSalt(secretKey);
    const pwd = await bcrypt.hash(password, salt);
    // 这个内部封装了数据库的操作
    const response = await User.create({
      username,
      password: pwd,
      create_time: Date.now()
    })
      .then(user => {
        if (user.get("id")) {
          return Promise.resolve({
            code: 200,
            message: "创建用户成功",
            userId: user.get("id")
          });
        } else {
          return Promise.reject({
            ...UserCreateError
          });
        }
      })
      .catch(err => {
        throw new Error(err);
      });
    return response;
  }

  // 处理更新用户的service
  async updateUser() {}
  //  处理用户登录逻辑
  async userLogin(username, password) {
    const secretKey = config.secretKey;
    const user = await User.findOne({
      where: {
        username
      }
    });
    const isValidate = await bcrypt.compare(password, user.get("password"));
    if (isValidate) {
      const token = jwt.sign({ userId: user.id }, secretKey, {
        expiresIn: "1h"
      });
      return {
        code: 200,
        message: "登录成功",
        data: {
          userId: user.id,
          username: user.username,
          token
        }
      };
    } else UserLoginError;
  }
  async getUser(userId) {
    const user = await User.findOne({
      where: {
        id: userId
      }
    });
    if (user) {
      const { dataValues } = user;
      const { password, ...other } = dataValues;
      return {
        code: 200,
        message: "success",
        data: {
          ...other
        }
      };
    }
    return {
      ...UserNotFound
    };
  }
}
module.exports = new UserService();
