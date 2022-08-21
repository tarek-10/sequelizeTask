const userModels = require("../../../model/user.model");

const controllerUserUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await userModels.findOne({
      where: {
        id,
      },
    });

    if (user) {
      const updatedUser = await userModels.update(
        { name },
        {
          where: {
            id: user.id,
          },
        }
      );
      res.json({ message: "success", updatedUser });
    } else {
      res.json({ message: "user not found please enter correct id" });
    }
  } catch (error) {
    res.json({ error: "error", error });
  }
};

module.exports = controllerUserUpdate;
