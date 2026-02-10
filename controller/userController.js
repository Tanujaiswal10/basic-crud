const userService = require("../service/userService");

exports.createUser = async (req, res) => {
  try {
    const { name, email, standard, password, school } = req.body;

    if (!name || !email || !standard || !password || !school) {
      return res.status(400).json({
        message: "Please fill all the fields"
      });
    }

    const user = await userService.createUser(req,res);

    return res.status(201).json({
      message: "User Created"
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
