const express= require('express')
const {view}=require('../controller/userController')
const {loginVerifyed,logout} =require('./../middliewares/authGuard/loginVerifyed')

const router = express.Router()

router.get("/",loginVerifyed,view);
router.get('/logout',logout)
module.exports=router;