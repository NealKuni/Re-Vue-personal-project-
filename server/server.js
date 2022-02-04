const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const port = 8000




app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   



require('./config/mongoose.config');    
require('./routes/user.routes')(app);
require('./routes/review.routes')(app);
    
app.listen(port, 
    () => console.log(`Listing on port ${port}`) );

