const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//        message: "Hello World"
//     });
// }

module.exports = {
    register: (req, res) => {
        const newUser = new User(req.body);
        console.log(newUser); 

        newUser.save()
            .then(()=>{
                console.log("success!");
                res.json({
                    message: "Successly Registered",
                    user: newUser,
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if(user === null){
                    res.status(400).json({ message: "Invalid Login Attempt - 1"})
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then((isPasswordValid) => {
                            if(isPasswordValid=== true) {
                                console.log("password is valid");
                                res.cookie("usertoken", 
                                    jwt.sign({
                                        _id: user._id,
                                        email: user.email
                                    }, 
                                    process.env.JWT_SECRET),
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 99999999999)
                                    })
                                    .json({
                                        message: "Successfully logged in",
                                        userLoggedIn: {
                                            firstName: user.firstName,
                                        }
                                    })
                            } else {
                                res.status(400).json({ message: "Invalid Login Attempt - 2"})
                            }
                        })
                        .catch((err) => {
                        res.status(400).json({ message: "Invalid Login Attempt - 3"})
                        })
                }
            })
            .catch((err) => {
                res.status(400).json({ message: "Invalid Login Attempt - 4"})
            })
    }

}

 