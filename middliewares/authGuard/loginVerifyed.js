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


const gostUser = function(req,res,next){
    let cookies = Object.keys(req.signedCookies).length>0 ? req.signedCookies : null;

if(cookies){
    res.redirect('/dashboard')
}else{
next()
}
}


//logout
const logout = function (req, res, next) {

    res.clearCookie(process.env.APP_NAME)
    res.redirect("/login");

  res.end()
      
}

module.exports = {
    loginVerifyed,
    gostUser,
    logout
}