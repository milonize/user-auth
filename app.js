const express= require('express')
const dotenv= require('dotenv')
const mongoose= require('mongoose')
const bodyParser = require('body-parser');
const userRouter = require('./router/userRoute')
const authRouter = require('./router/authRouter')
const {pageNotFound,defaultErrHandler} = require('./middliewares/errors/404');
const cookieParser = require('cookie-parser');


const app= express();
dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }));
//database connection here:
mongoose.connect(process.env.MONGO_CONNECTION_URL)
.then(()=>{
console.log('Database connection success')
})
.catch(err=>{
    console.log('Database connection Failed: '+err)

})



app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser(process.env.COOKIE_SECR))
// call the all useable router here:
app.use('/',authRouter)
app.use('/users',userRouter)


// 404 error
app.use(pageNotFound)
app.use(defaultErrHandler)






app.set('view engine','ejs')

app.listen(process.env.PORT,()=>{
    console.log('application running on port ' +process.env.PORT)
})