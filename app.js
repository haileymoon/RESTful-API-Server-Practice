// express import
const express = require('express');
// execute express on top of "app"
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
//Import Routes
const postsRoute = require('./routes/posts'); //routes폴더의 posts파일로 경로 설정
const bodyParser = require('body-parser');

// everytime it hits any request, make sure to use body-parser
app.use(bodyParser.json())

// middleware, if /posts get hit, make sure to use the postRoute
app.use('/posts', postsRoute); 

//ROUTES
app.get('/',(req, res) => {
    res.send("we are on home");
})

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>{
    console.log('connected to DB!')
})

// boot up the server by listening
app.listen(3000);