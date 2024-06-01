const PeopleDB = require('./../../models/users/People')
const createErr =require('http-errors')

const {check,validationResult} = require('express-validator')

const RegisterValidator=[
    check('username')
    .trim()
    .custom(async (value)=>{

try{
const checkUsername = await PeopleDB.findOne({
    username:value
}) 
if(checkUsername && checkUsername._id){
    throw createErr('Username is already used!')
}
}catch(err){
    throw createErr(err.message)
}

    }),

   check('password')
   .isStrongPassword().withMessage('Use Strong Password')
   .trim(),

   check('email')
   .isEmail().withMessage('Use an valid email address')
   .toLowerCase()
   .trim()
   .custom(async (value)=>{

    try{
    const checkEmail = await PeopleDB.findOne({
        email:value
    }) 
    if(checkEmail && checkEmail._id){
        throw createErr('Email is already used!')
    }
    }catch(err){
        throw createErr(err.message)
    }
    
        }),

   
]

const RegisterValidatorResult = function(req,res,next){
    const errors = validationResult(req);
    const mappedErrors=errors.mapped();


    
    if(Object.keys(mappedErrors).length===0){
        next()
    }else{
        
        res.json({
            errors:mappedErrors,
        })
    }
}

module.exports = {
    RegisterValidator,
    RegisterValidatorResult,
}