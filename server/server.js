const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./config/mongoose.config');    
require('./routes/user.routes')(app);
    
app.listen(8000, () => console.log("Listing on port 8000") );

