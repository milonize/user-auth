const express= require('express')
const {view}=require('../controller/userController')


const router = express.Router()



router.get("/dashboard", view);

module.exports=router;