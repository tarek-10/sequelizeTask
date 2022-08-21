const userModel = require("../../../model/user.model");

const getUserController = async (req, res) => {
  try {
    const users = await userModel.findAll({});

    res.json({ message: "success", users });
  } catch (error) {
    res.json({ error: "error", error });
  }
};

module.exports = getUserController;
