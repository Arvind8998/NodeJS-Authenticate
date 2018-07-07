const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


//get all user
router
.get('/user', function(err , doc) {

  var response = {
      status : 200,
      message : doc
  };
if (err) {
  console.log("error finding user");
      res
          response.status(500)
          response.message = err;
      }

      else if(!doc)
          {
              res
                  response.status(404)
                  response . message = {
                      "message" : " user id not found"};
                  }
                  
     res

     .status(response.status)
     .json(response.message);
 


  
Hotel
     .find()
     .toArray(function(err, docs){
 
 
    console.log("found users" , docs);

    res
       .status(200)
       .json(docs); 

     });
    });
     //get single user
router
.get('/user/:userid', (req, res, next) => {
  const userid = req.params.userid;
 

  User
   .findById(userid)
  
  .exec(function(err , doc) {

      var response = {
          status : 200,
          message : doc
      };
  if (err) {
      console.log("error finding user");
          res
              response.status(500)
              response.message = err;
          }

          else if(!doc)
              {
                  res
                      response.status(404)
                      response . message = {
                          "message" : " user id not found"};
                      }
                      
         res

         .status(response.status)
         .json(response.message);
     });
    });
    
    
// Register
router
.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    
  });

  User
    .addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router
.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User
  .getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User
    .comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

//batch



 
// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
