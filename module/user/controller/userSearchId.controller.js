const { Op } = require("sequelize");
const userModels = require("../../../model/user.model");

const userSearchRangeById = async (req, res) => {
  try {
    const user = await userModels.findAll({
      where: {
        id: { [Op.in]: [1, 2, 5, 7, 10] },
      },
    });

    res.json({ message: "success", user });
  } catch (error) {
    res.json({ error: "error", error });
  }
};

module.exports = userSearchRangeById;
