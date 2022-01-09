const userModel = require("../models/user.model");

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}

module.exports.createUser = (req, res) => {
    User.create(req.body)
        console.log(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

