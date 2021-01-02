const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys')

const requireLogin = require('../middleware/requireLogin')

// router.get('/', (req, res) => {
//     res.send("hello")
// })

// router.get('/protected', requireLogin, (req, res) => {
//     res.send("hello user");
// })

router.post('/signup', (req, res) => {
    //console.log(req.body);
    const { name, email, password } = req.body;

    if(!email || !password || !name){
        return res.status(422).json({
                error : "Please add all the fields"
            })
    }
    //res.json({"msg" : "Successfully posted!!" })
    User.findOne({email:email})
      .then((savedUser) => {
          if(savedUser){
              return res.status(422).json({"msg" : "Successfully posted!!" })
          }

          bcrypt.hash(password, 12)
             .then(hashedPwd => {
                const user = new User({
                    email,
                    password: hashedPwd,
                    name
                })

                user.save()
                .then(user => {
                    res.json({"msg":"User added successfully!!"})
                }).catch(err => {
                    console.log(err)
                })
             })
          

      }).catch(err => {
        console.log(err)
      })
})


router.post('/signin', (req, res) => {
   const { email, password } = req.body;
   if(!email || !password){
       return res.status(422).json({error : "Please provide email or password"})
   }

   User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error : "Invalid email or password"})
        }

        bcrypt.compare(password, savedUser.password)
            .then(doMatch => {
                if(doMatch){
                   // res.status(422).json({msg : "Successfully signed in"})
                   const token = jwt.sign({_id: savedUser._id}, JWT_SECRET);
                   const {_id, name, email} = savedUser
                   res.status(422).json({
                       msg : "Successfully signed in",
                       token,
                       user: {_id, name, email}
                    })
                } else{
                    return res.status(422).json({error : "Invalid email or password"})
                }
            }).catch(err => {
               console.log(err)
            })
    })
})

module.exports = router;