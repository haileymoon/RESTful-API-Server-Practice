// express import
const express = require('express');
// execute express on top of "app"
const app = express();

//ROUTES
app.get('/',(req, res) => {
    res.send("we are on home");
})

app.get('/posts',(req, res)=>{
    res.send("we are on posts");
})
// boot up the server by listening
app.listen(3000);