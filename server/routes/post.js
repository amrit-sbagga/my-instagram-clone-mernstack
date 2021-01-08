const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model('Post');

router.post('/createpost', requireLogin, (req, res)=>{
    console.log(req.body);
    const {title, body, url} = req.body;
    if(!title || !body || !url){
        return res.status(422).json({error:"Please add all the fields"})
    }
   // console.log(req.user);
    //res.send("ok");

    //to not to store password in db
    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        photo: url,
        postedBy:req.user
    })
    post.save().then(result => {
        res.json({post:result})
    }).catch(err => {
        console.log(err)
    })
})

router.get('/allpost', requireLogin, (req, res)=>{
    Post.find()
    .populate("postedBy", "_id name")
    .then(posts => {
        res.json({posts})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/mypost', requireLogin, (req, res)=>{
    Post.find({postedBy:req.user._id})
      .populate("postedBy", "_id name")
      .then(mypost => {
          res.json({mypost})
      })
      .catch(err => {
          console.log(err);
      })
})

module.exports = router