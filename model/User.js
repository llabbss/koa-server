/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-23 15:50:18
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-25 10:09:51
 * @FilePath: /server/model/User.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sequelize = require("sequelize");
const seq = require("../db/seq");

const { DataTypes } = sequelize;
const User = seq.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "用户邮箱"
    },
    username: {
      type: DataTypes.STRING(100), // DataTypes是Sequelize中为我们提供的类型，需要引入
      allowNull: false, // 是否允许空值，参考Sequelize文档
      unique: true, // 是否允许唯一
      comment: "字段注释"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "用户头像"
    },
    create_time: {
      type: DataTypes.DATE,
      comment: "创建时间",
      defaultValue: 1684915738997
    },
    update_time: {
      type: DataTypes.DATE,
      comment: "更新时间",
      defaultValue: 1684915738997
    }
  },
  {
    // 禁止sequelize修改表名，默认会在animal后边添加一个字母`s`表示负数
    freezeTableName: true,
    // 禁止自动添加时间戳相关属性
    timestamps: false
  }
);
module.exports = User;
