
//user view controller funtion
function view(req,res,next){
    res.render('./users/dashboard')
}



//export funtion
module.exports={
    view,
}