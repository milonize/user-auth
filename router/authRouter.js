const express = require("express");
const {
  login,
  registerView,
  registerPost,
  Userlogin,

} = require("../controller/authController");
const {
  RegisterValidator,
  RegisterValidatorResult,
} = require("../middliewares/validator/registerValidator");
const {gostUser} =require('./../middliewares/authGuard/loginVerifyed')
const router = express.Router();

router.get("/login", gostUser,login);
router.post("/login",gostUser, Userlogin);

router.get("/register",gostUser,registerView);
router.post(
  "/register",
  RegisterValidator,
  RegisterValidatorResult,
  registerPost
);



module.exports = router;
