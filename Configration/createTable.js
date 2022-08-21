const sequelize = require("./DB.config");

const createTable = () => {
  sequelize
    .sync()
    .then((res) => {
      console.log("DB Connected Successfully ...!");
    })
    .catch((err) => {
      console.log("Fail To Connect DB ...!");
    });
};

module.exports = createTable;
