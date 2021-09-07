let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

router.get("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);

module.exports= router;