const userModels = require("../../../model/user.model");
const { Op } = require("sequelize");

const searchUsersController = async (req, res) => {
  try {
    const { searchKey } = req.query;

    const user = await userModels.findAll({
      where: {
        name: { [Op.like]: `%${searchKey}%` },
      },
    });

    res.json({ message: "success", user });
  } catch (error) {
    res.json({ error: "error", error });
  }
};
module.exports = searchUsersController;
