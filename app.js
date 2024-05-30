const express= require('express')
const dotenv= require('dotenv')
const mongoose= require('mongoose')
const bodyParser = require('body-parser');
const userRouter = require('./router/userRoute')
const authRouter = require('./router/authRouter')
const {pageNotFound,defaultErrHandler} = require('./middliewares/errors/404')


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

// call the all useable router here:
app.use('/users',userRouter)
app.use('/',authRouter)


// 404 error
app.use(pageNotFound)
app.use(defaultErrHandler)






app.set('view engine','ejs')

app.listen(process.env.PORT,()=>{
    console.log('application running on port ' +process.env.PORT)
})