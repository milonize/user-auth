const PeopleDB = require('./../models/users/People')

// user view controller function
function login(req, res, next) {
    
    res.status(200).render('login',{
       tittle: 'Login Page'
    });
}

function registerView(req, res, next) {
    
    res.status(200).render('register',{
       tittle: 'Register Page'
    });
}

async function registerPost(req, res, next) {
    if(req.body.password===req.body.confrim_password){
        const newUser = new PeopleDB(req.body)
        try{
            await newUser.save();
            res.status(200).json({
                success:{
                    approved:{
                        msg:true
                    }
                }
            });
            res.end();
        }catch(err){
            res.status(500).json({
                message: err.message
            });
            res.end();
        }
    }else{
        res.json({
            errors:{
                confrim_password:{
                    msg:'Confrim password not match',
                    value:req.body.confrim_password,
                    type:'field'
                }
            }
        });

        res.end();
    }

  

}

// export function
module.exports = {
    login,
    registerView,
    registerPost
};
