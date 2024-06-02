const PeopleDB = require("./../models/users/People");
const bcrypt = require("bcrypt");
const { render } = require("ejs");
const createErr = require("http-errors");
const jwt = require("jsonwebtoken");
// user view controller function
function login(req, res, next) {
  res.status(200).render("login", {
    tittle: "Login Page",
  });
}

function registerView(req, res, next) {
  res.status(200).render("register", {
    tittle: "Register Page",
  });
}

async function registerPost(req, res, next) {
  const hashPw = await bcrypt.hash(req.body.password, 10);

  if (req.body.password === req.body.confrim_password) {
    const newUser = new PeopleDB({
      ...req.body,
      password: hashPw,
    });
    try {
      await newUser.save();
      res.status(200).json({
        success: {
          approved: {
            msg: true,
          },
        },
      });
      res.end();
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
      res.end();
    }
  } else {
    res.json({
      errors: {
        confrim_password: {
          msg: "Confrim password not match",
          value: req.body.confrim_password,
          type: "field",
        },
      },
    });

    res.end();
  }
}

async function Userlogin(req, res, next) {
  try {
    const userCheck = await PeopleDB.findOne({
      $or: [{ email: req.body.userInput }, { username: req.body.userInput }],
    });
    if (userCheck && userCheck._id) {
      const isPwvalid = await bcrypt.compare(
        req.body.userInput,
        userCheck.password
      );
      if (isPwvalid === true) {
        const userObject = {
            username:userCheck.username,
            email:userCheck.email,
            role:userCheck.role
        }
        const jwToken = jwt.sign(userObject,process.env.JWT_SEC,{
            expiresIn:86400000 //token expire in 1 day
        });

        //set cookie
        res.cookie(process.env.APP_NAME,jwToken,{
            maxAge:86400000,
            httpOnly:true,
            signed:true
        })
        res.locals.loginedUser = userObject

        res.render("./users/dashboard", {
            tittle: 'Dashboard - Milonize'
          });
      } else {
        throw createErr("Invalid password");
      }
    } else {
      throw createErr("User not found");
    }
  } catch (err) {
    res.render("login", {
        error: {
            loginErr:err.message
        },
        
      });
  }
}

// export function
module.exports = {
  login,
  registerView,
  registerPost,
  Userlogin,

};
