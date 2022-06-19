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
    const post = new Post({ // new Post는 우리가 위에서 const로 정의해준 모델에 맞는 변수를 만드는 것
        title: req.body.title,
        description: req.body.description
    });
    // 이 post라는 객체를 db에 저장
    post.save()
        .then(data => {
        //screen에 저장한 데이터 표기하도록
            res.json(data);
        })
        .catch(err =>{
            res.json({message : err});
        });
});


// 이 모듈을 export 해야 app.js에서 사용가능
module.exports = router;