/*
 * @Author: liaocy lcy@sh-senyu.com
 * @Date: 2023-05-23 11:33:19
 * @LastEditors: liaocy lcy@sh-senyu.com
 * @LastEditTime: 2023-05-23 14:33:01
 * @FilePath: /server/utils/User.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DataTypes, Sequelize, Model } from "sequelize";
const sequelize = new Sequelize("gov-admin-manage", "root", null, {
  host: "localhost",
  dialect: "mysql"
});
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  throw new Error("something is wrong with connect to mysql");
}
class People extends Model {}
People.init(
  {
    nickName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    modelName: "users",
    freezeTableName: true
  }
);
(async () => {
  await People.sync({ force: true }); // force:true => delete it if exists
})();

export default People;