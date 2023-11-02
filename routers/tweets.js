const { tweetsController } = require("../controllers");

const router = require("express").Router();

router.post("/", tweetsController.create);
router.patch("/:id", tweetsController.update);
router.get("/", tweetsController.get)

module.exports = router;