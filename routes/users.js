// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');
// const User = require('../models/user');


//get all user
// router
//   .get('/user', function(req,res) {
   
//     User
//     .find( {} , function(err, users){
 
//  if (err) {
//   console.log("error finding user");
//   next();
// }     
//  res
//        .json(users);
//      });
//     });
    



//     router.get('/getall', (req, res, next) => {
//       User.getAllUsers((err, user)=>{
//         if(err) throw err;
//         if(user){
//           var newusr = [];
//           for (usr of user){
//               newusr.push({id: usr._id,
//                 name: usr.name,
//                 username: usr.username,
//                 email: usr.email}
//               );
//           }
//           res.json({success: true,
//             user: newusr
//           });
//         }
//       });
//     });

     //get single user
// router
// .get('/user/:userid', (req, res, next) => {
//   const userid = req.params.userid;
//   console.log("hi");
//   User
//    .findById(userid)
//   .exec(function(err , doc) {

//       var response = {
//           status : 200,
//           message : doc
//       };
      
//   if (err) {
//       console.log("error finding user");         
//               response.status = 500;
//               response.message = err;
//           }

//           else if(!doc)
//               {       
//                 response.status = 404;
//                       response . message = {
//                           "message" : " user id not found"};
//                       }
                      
//          res

//          .status(response.status)
//          .json(response.message);
//      });
//     });
// router
// .get('/sub', (req, res, next) => {
//   var subId = "5b365c0d66d9804db60695a9";
//   console.log("hi");
//   User
//    .findById(subId)
//   .exec(function(err , doc) {
// console.log(doc.username);
//       var response = {
//           status : 200,
//           message : doc.username
//       };
      
//   if (err) {
//       console.log("error finding user");         
//               response.status = 500;
//               response.message = err;
//           }

//           else if(!doc)
//               {       
//                 response.status = 404;
//                       response . message = {
//                           "message" : " user id not found"};
//                       }
                      
//          res

//          .status(response.status)
//          .json(response.message);
//      });
//     });
    
    // add a batch
   
    // var addBatch = function(req,res,user){
    
    //   user.batch.push({

    //    batchno : parseInt(req.body.batchno , 10),
    //    subject : req.body.subject,
    //    days : req.body.days,
      //  time : new Date (req.body.time)
        
    //   });
    //  user.save(function(err , userUpdated){

    //   if(err){
    //     res
    //     .status(500)
    //     .json(err);
    //   }
    //   else{
    //     res
    //     .status(201)
    //     .json(userUpdated.batch.length - 1)
    //   }
    //  });
    // };

    // router
    // .post
    // ('/user/:userid/batches', (req, res, next) => {
    //   var userid = req.params.userid;
    //   console.log('GET userId', userid);
    
    //  User
    //     .findById(userid)
    //     .select('batch')
    //     .exec(function(err, doc) {
    //       var response = {
    //         status : 200,
    //         message : doc
    //     };
    // if (err) {
    //     console.log("error finding user");
            
    //             response.status = 500;
    //             response.message = err;
    //         }
  
    //         else if(!doc)
    //             {
    //                     response.status = 404;
    //                     response . message = {
    //                         "message" : " user id not found"};
    //                     }
    //        if(doc){
    //          addBatch(req,res,doc);
    //        }             
    //        res
  
    //        .status(response.status)
    //        .json(response.message);
           
    //    });
    // });
    
    // router.post('/:userId/batch', (req, res, next) => {
    //   const userId = req.params.userId;
    //   User.getUsermBatch(userId,(err, user)=>{
    //     if(err)throw err;
    //     else if(!user){
    //       res.json({success: false,
    //       msg: "No userId with id = " + userId});
    //     }
    //    if(user){
    //     User.addBatch(user, req ,(err, batch) => {
    //       if(err) throw err;
    //       if(batch){
    //         res.json({
    //           success: true,
    //           msg: "Batch Updated",
    //           batch: batch
    //         });
    //       }
    //     });
    //    }
    //   });
    // });
    

// Register
// router
// .post('/register', (req, res, next) => {
//   let newUser = new User({
//     name :  req.body.name,
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     address: req.body.address,
//     institutename: req.body.institutename,
//     mobile: req.body.mobile
    
//   });

//   User
//     .addUser(newUser, (err, user) => {
//     if(err){
//       console.log("err");
//       res.json({success: false, msg:'Failed to register user'});
//     } else {
//       console.log("success");
//       res.json({success: true, msg:'User registered'});
//     }
//   });
// });

// // Authenticate
// router
// .post('/authenticate', (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   User
//   .getUserByUsername(username, (err, user) => {
//     if(err) throw err;
//     if(!user){
//       return res.json({success: false, msg: 'User not found'});
//     }

//     User
//     .comparePassword(password, user.password, (err, isMatch) => {
//       if(err) throw err;
//       if(isMatch){
//         const token = jwt.sign(user.toJSON(), config.secret, {
//           expiresIn: 604800 // 1 week
//         });

//         res.json({
//           success: true,
//           token: 'JWT '+token,
//           user: {
//             id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email
//           }
//         });
//       } else {
//         return res.json({success: false, msg: 'Wrong password'});
//       }
//     });
//   });
// });

//batch



 
// Profile
// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Batch = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    address: req.body.address,
    institutename: req.body.institutename,
    mobile: req.body.mobile
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: err+'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
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
            email: user.email,
            address: user.address,
            institutename: user.institutename,
            mobile: user.mobile
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


router.get('/getall', (req, res, next) => {
User.getAllUsers((err, user)=>{
  if(err) throw err;
  if(user){
    var newusr = [];
    for (usr of user){
        newusr.push({id: usr._id,
          name: usr.name,
          username: usr.username,
          email: usr.email,
          address: usr.address,
          institutename: usr.institutename,
          mobile: usr.mobile,
          batch: usr.batch
        }
        );
    }
    res.json({success: true,
      user: newusr
    });
  }
});
});

router.post('/:userId/batch', (req, res, next) => {
  const userId = req.params.userId;
  User.getUserBatch(userId,(err, user)=>{
    if(err)throw err;
    else if(!user){
      res.json({success: false,
      msg: "No userId with id = " + userId});
    }
   if(user){
    User.addBatch(user, req ,(err, batch) => {
      if(err) throw err;
      if(batch){
        res.json({
          success: true,
          msg: "Batch Updated",
          batch: batch
        });
      }
    });
   }
  });
});

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  User.getUserById(userId, (err, user)=>{
    if(err) throw err;
    else if(user){
      res.json({
        success: true,
        user: user
      })
    }
  })
})

module.exports = router;
