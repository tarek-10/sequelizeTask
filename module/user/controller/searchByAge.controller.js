const { Op } = require("sequelize");
const userModels = require("../../../model/user.model");

const searchByAgeRngeController = async (req, res) => {
  try {
    const { ageRange } = req.body;

    const user = await userModels.findAll({
      where: {
        age: { [Op.between]: ageRange },
      },
    });
    console.log(user);
    res.json({ message: "success", user });
  } catch (error) {
    res.json({ error: "error", error });
  }
};

module.exports = searchByAgeRngeController;
