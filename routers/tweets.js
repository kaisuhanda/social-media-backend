const router = require("express").Router();
const { tweetsController } = require("../controllers");

router.get("/", tweetsController.get)
router.post("/create", tweetsController.create);
router.patch("/update-tweet/:id", tweetsController.update);

module.exports = router;