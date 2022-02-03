const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require("multer");
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });



app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   

app.use( "./uploads", express.static(__dirname +'/uploads'));


require('./config/mongoose.config')(process.env.ATLAS_URI);    
require('./routes/user.routes')(app);
require('./routes/review.routes')(app);
    
app.listen(process.env.DB_PORT, () => console.log(`Listing on port ${process.env.DB_PORT}`) );

