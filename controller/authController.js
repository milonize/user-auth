

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

function registerPost(req, res, next) {
    console.log(req.body.username)
    res.status(200).json({
        
        message: "User was added successfully!"
    });
}


// export function
module.exports = {
    login,
    registerView,
    registerPost
};
