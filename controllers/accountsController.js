const { users } = require("../models");

module.exports = {
  login: async (req, res, next) => {
    try {
      const username = req.query.username;
      const user = await users.findOne({ where: { username } });

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

      const [rowsUpdated] = await users.update(updatedFields, {
        where: { id: req.params.id },
      });

      if (rowsUpdated > 0) {
        const updatedUser = await users.findByPk(req.params.id);
        if (updatedUser) {
          return res.status(200).send(updatedUser);
        } else {
          return res.status(404).send("User not found.");
        }
      } else {
        return res.status(404).send("No fields to update.");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};
