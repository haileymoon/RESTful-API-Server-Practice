// express import
const express = require('express');
// execute express on top of "app"
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

//ROUTES
app.get('/',(req, res) => {
    res.send("we are on home");
})

app.get('/posts',(req, res)=>{
    res.send("we are on posts");
})


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>{
    console.log('connected to DB!')
})

// boot up the server by listening
app.listen(3000);