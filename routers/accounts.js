const router =require("express").Router();
const { accountsControllers }= require("../controllers");

router.get("/",accountsControllers.getData);
router.post("/",accountsControllers.create);
router.post("/login",accountsControllers.login);
router.post("/register",accountsControllers.register);

module.exports = router
