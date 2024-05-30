const createErr = require('http-errors')

function pageNotFound(req,res,next){
    next(createErr(404,'Sorry this page not found'))
}

function defaultErrHandler(err,req,res,next){
   res.status(err.status || 404);
   res.render('./errors/404',{
    tittle: 'Page Not Found',
    body: 'Sorry this page not found'
   })
}


module.exports = {
    pageNotFound,
    defaultErrHandler
}