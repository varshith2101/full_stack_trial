require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5174',
    methods: ["POST" , "GET"],
    credentials: true
}))

const mongoose = require('mongoose');

mongoose.connect(process.env.Database_URL);

const data_base = mongoose.connection
data_base.on('error',(error) => {console.log(error)});
data_base.once('open',() => {console.log("IM CONNECTED")});

app.use(express.json());

const article_router = require('./routes/articles');

app.use('/articles',article_router);

app.listen(8000,() => {
    console.log('My server is running on port 8000');
})

//to use nodemon, goto package.json -> under scripts, remove and put
//  "devStart" : nodemon server.js

