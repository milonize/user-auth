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

const router = express.Router();

router.get("/login", login);
router.post("/login", Userlogin);

router.get("/register", registerView);
router.post(
  "/register",
  RegisterValidator,
  RegisterValidatorResult,
  registerPost
);



module.exports = router;
