const router = require("express").Router();
const { accountsControllers } = require("../controllers");

router.get("/",accountsControllers.getData);
router.get("/login",accountsControllers.login);
router.post("/register",accountsControllers.register);
router.patch('/edit-profile/:id', accountsControllers.editProfile)

module.exports = router
