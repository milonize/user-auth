const express= require('express')
const {login,registerView,registerPost}=require('../controller/authController')
const {RegisterValidator,RegisterValidatorResult} = require('../middliewares/validator/registerValidator')

const router = express.Router()


router.get('/login',login)
router.get('/register',registerView)
router.post('/register',RegisterValidator,RegisterValidatorResult,registerPost)


module.exports=router;