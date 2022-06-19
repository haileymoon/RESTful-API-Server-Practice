// express import
const express = require('express');
// execute express on top of "app"
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
//Import Routes
const postsRoute = require('./routes/posts'); //routes폴더의 posts파일로 경로 설정
// 아래 라인으로 인해 posts.js에서 /post를 빼도 됨
app.use('/posts', postsRoute); // middleware, if /posts get hit, make sure to use the postRoute


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