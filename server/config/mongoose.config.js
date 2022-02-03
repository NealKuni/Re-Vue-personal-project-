const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect( 'mongodb://localhost/reVue' , { 
        useNewUrlParser: true, 
        useUnifiedTopology: true

    })
        .then(() => {
            console.log("Established a connection to the database")
            
        })  
        .catch(err => console.log("Something went wrong when connecting to the database", err));

}

const connection = mongoose.connection;
connection.once("open", () => 
console.log("MongoDB connnection established successfully")
);

