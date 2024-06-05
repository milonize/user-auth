
//user view controller funtion
function view(req,res,next){

    res.render('./users/dashboard',{
      tittle:'Dashboard'
    })
}


//export funtion
module.exports={
    view,
}