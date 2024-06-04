const express= require('express')
const {view}=require('../controller/userController')
const loginVerifyed =require('./../middliewares/authGuard/loginVerifyed')

const router = express.Router()

router.get("/dashboard",loginVerifyed,view);

module.exports=router;