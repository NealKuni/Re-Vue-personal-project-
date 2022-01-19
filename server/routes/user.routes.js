const UserController = require('../controllers/user.controller'); 


module.exports = (app) => {
    // register user route
    app.post('/api/users/register', UserController.register);  
    // login user routes
    // register user routes 
    app.post('/api/users/login', UserController.login);
    app.post('/api/users/logout', UserController.logout);
    
}

