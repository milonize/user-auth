const express= require('express')
const {view}=require('../controller/userController')


const router = express.Router()



router.get('/preview',view)


module.exports=router;