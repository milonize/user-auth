const jwt = require("jsonwebtoken");


const loginVerifyed =(req,res,next)=>{
let cookies = Object.keys(req.signedCookies).length>0 ? req.signedCookies : null;

if(cookies){
try{
    token = cookies[process.env.APP_NAME];
    const decoded = jwt.verify(token,process.env.JWT_SEC);
    res.locals.loginedUser = decoded;
    next()
}catch(err){
res.redirect('/login')
}
}else{
res.redirect('/login')
}

}

module.exports = loginVerifyed