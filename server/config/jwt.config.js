const jwt = require('jsonwebtoken');

// need to create review controller so I can authenticate those as well. 


module.exports = {
    authenticate (req, res, next) {
        jwt.verify(req.cookies.usertoken,
            process.env.JWT_SECRET,
            (err, payload) => {
                if(err){
                    console.log(err);
                    res.status(401).json({ verified: false })
                } else {
                    console.log("you are authenticated");
                    next();
                }
            }
        )
    }
} 