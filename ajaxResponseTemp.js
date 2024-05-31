res.json({
    errors:{
        inputFeildName:{
            msg:'Confrim password not match'
        }
    }
});



//success response
res.status(200).json({
    success:{
        inputFeildName:{
            msg:'Confrim password match'
        }
    }
});


//preview this error or success message
console.log(data.errors.inputFeildName.msg);
console.log(data.success.inputFeildName.msg);