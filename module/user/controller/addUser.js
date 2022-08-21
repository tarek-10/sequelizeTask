const userModels = require("../../../model/user.model");

const addUserController = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;

    const user = await userModels.findOne({
      where: {
        email,
      },
    });

    if (user) {
      res.json({ message: "email token" });
    } else {
      const addUsers = await userModels.create({
        name,
        email,
        age,
        password,
      });
      res.json({ message: "done", addUsers });
    }
  } catch (error) {
    res.json({ error: "error", error });
  }
};

module.exports = addUserController;
