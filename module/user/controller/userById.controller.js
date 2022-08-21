const userModels = require("../../../model/user.model");

const controllerUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModels.findOne({
      where: {
        id,
      },
    });
    res.json({ message: "success", user });
  } catch (error) {
    res.json({ error: "error", error });
  }
};

module.exports = controllerUserById;
