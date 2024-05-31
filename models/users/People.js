const mongoose = require('mongoose')

const PeopleSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    profile:{
        type:String,
    },
    role:{
        type:String,
        emum:['user','admin'],
        default:'user'
    }
},

{
    timestamps:true
}
);


const People = mongoose.model('People',PeopleSchema)


module.exports = People;