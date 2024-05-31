const {check,validationResult} = require('express-validator')

const RegisterValidator=[
    check('username')
    .trim(),

   check('password')
   .isStrongPassword().withMessage('Use Strong Password')
   .trim()
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