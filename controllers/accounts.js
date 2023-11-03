const { accounts } = require("../models");
module.exports = {
  getData: async (req, res, next) => {
    try {
      const result = await accounts.findAll({
        attributes: {exclude: ["password", "passwordConfirmation"]}
      });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  register: async (req, res) => {
    try {
      const { username, email, password, passwordConfirmation, phone, status } =
        req.body;

      if (!username || !email || !password || !phone) {
        return res
          .status(400)
          .json({ message: "Please provide a username, email, and password." });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Please must min 8 characters." });
      }
      if (password !== passwordConfirmation) {
        return res
          .status(400)
          .json({
            message: "Password and password confirmation do not match.",
          });
      }

      const checkUser = await accounts.findOne({ where: { username } });
      if (checkUser) {
        return res.status(409).json({ message: "Username already exists." });
      }

      const checkEmail = await accounts.findOne({ where: { email } });
      if (checkEmail) {
        return res.status(409).json({ message: "Email already exists." });
      }

      const result = await accounts.create({
        username,
        email,
        password,
        phone,
        status,
      });
      res
        .status(201)
        .json({
          success: true,
          message: "Account created successfully",
          user: result,
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Registration failed." });
    }
  },
  login: async (req, res, next) => {
    try {
      const username = req.query.username;
      const user = await accounts.findOne({ where: { username } });

      if (user) {
        return res.status(200).send({
          success: true,
          message: `Welcome ${username}`,
        });
      } else {
        return res.status(500).send({
          success: false,
          message: "User not found",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  editProfile: async (req, res) => {
    try {
      const { username, password, email, phone } = req.body;
      const updatedFields = {};
      if (username) {
        updatedFields.username = username;
      }
      if (password) {
        updatedFields.password = password;
      }
      if (email) {
        updatedFields.email = email;
      }
      if (phone) {
        updatedFields.phone = phone;
      }

      const [rowsUpdated] = await accounts.update(updatedFields, {
        where: { id: req.params.id },
      });

      if (rowsUpdated > 0) {
        const updatedUser = await accounts.findByPk(req.params.id);
        if (updatedUser) {
          return res.status(200).send(updatedUser);
        } else {
          return res.status(404).send("User not found.");
        }
      } else {
        return res.status(404).send("Field not found");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};
