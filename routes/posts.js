//import express again to connect the flow
const express = require('express');
// app대신 router을 이용해서 route들을 더 구조적, 효율적으로 관리
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req, res)=>{
    res.send("we are on posts");
});

router.post('/',(req, res)=>{
    //post 하려는 것의 information, 즉 body에 접근해야함
    console.log(req.body);
});


// 이 모듈을 export 해야 app.js에서 사용가능
module.exports = router;