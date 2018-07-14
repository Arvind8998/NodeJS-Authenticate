// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const config = require('../config/database');





// const UserSchema = mongoose.Schema({

//   email: {
//     type: String,
//     required: true
//   },
//   username: {
//     type: String,
//     required: true,
    
//   },
//   password: {
//     type: String,
//     required: true
//   },
  
//   institutename: {
//     type: String,
//     required: true,
    
//   },
//   address: {
//     type: String,
//      required: true
//   },
//   mobile: {
//     type: Number,
//     required: true,
//     min : 0,
//     max : 10,
 
//   }
//   // batch : [BatchSchema]
// });
// const BatchSchema =  mongoose.Schema({

//   batchno : { 
//     type : Number ,
//     min : 0,
//     max : 5 ,
//     required : true
//   },
 

//   days : [String],

//   // time : {
//   //    type : Date 
//   //    "default" : Date.now
//   //  },
//   batchno : { 
//     type : Number ,
//     min : 0,
//     max : 5 ,
//     required : true
//   },

//   days : [String],

//   time : {
//     type : Date ,
//     "default" : Date.now
//   },

//   medium: {
//     type: String,
//     required: true
//   },

//   Subname : {
//     type: [String]
//   },

//   Classname : {
//     type: [String]
//   }
 
// });

// const InstituteSubjectSchema = mongoose.Schema({

//   Subname : {
//     type: String
//   },
  
 
// });

// const InstituteClassSchema = mongoose.Schema({
   
//   Classname : {
//     type: String
//   },

//   Subject : [InstituteSubjectSchema],
//   batch : [BatchSchema ] 

// });


// const UserSchema = mongoose.Schema({
//   name: {
//     type: String
//   },
//   email: {
//     type: String,
//     required: true,
//     // unique: true
//   },
//   username: {
//     type: String,
//     required: true,
    // unique: true
  // },
  
  //sub : [String], 

  // password: {
  //   type: String,
  //   required: true
  // }, 

  // institutename: {
  //       type: String,
  //       required: true,
        
  //     },
  //     address: {
  //       type: String,
  //        required: true
  //     },
  //     mobile: {
  //       type: String,
  //       required: true
      //   min : 0,
      //   max : 10
     
      // }
  // batch : [BatchSchema ]
  // Class : [InstituteClassSchema]

// });






// const User = module.exports = mongoose.model('User', UserSchema);

// module.exports.userGetOne = function(req, res) {
//   var id = req.params.userId;
//   console.log('GET userId', id);

//  User
//     .findById(id)
//     .exec(function(err, doc) {
//       res
//         .status(200)
//         .json(doc);
//     });

// };


// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
// }
// module.exports.getSubById = function(id, callback){
//   User.findById(id, callback);
// }

// module.exports.getUserByUsername = function(username, callback){
//   const query = {username: username}
//   User.findOne(query, callback);
// }
// module.exports.getAllUsers = function(callback){
//   User.find(callback);
// }
// module.exports.addUser = function(newUser, callback){
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if(err) throw err;
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//     if(err) throw err;
//     callback(null, isMatch);
//   });
// }

// module.exports.usergetone = function (req , res) {

//   var userId = req.params.userid;
//   console.log("get usereid" , userid);
  
// User
//   .findById(userid)
//   .select('batch')
//   .exec(function(err , doc) {
//     console.log("Returned doc" , doc);
//    res

//   .status(200)
//   .json(doc.batch);
//   });

// };
// module.exports.getUserBatch = function(id, callback){
//   User.findById(id, callback).select('batch');
// }
// module.exports.getUsermBatch = function(id, callback){
//   User.findById(id, callback).select('batch').select('num');
// }
// module.exports.addBatch = function(user, req, callback){
//   user.batch.push({
//     batchno : req.body.batchno,
//     days: req.body.days,
//     time: req.body.time,
//     medium: req.body.medium
//  });
//  user.save(callback);
// }

// module.exports.addMBatch = function(user, req, callback){
//   user.batch.push({
//     batchno : req.body.batchno,
//     days: req.body.days,
//     time: req.body.time,
//     medium: req.body.medium,
//     Subname :req.body.Subname,
//     Classname : req.body.Classname
    
//  });
//  user.save(callback);
// }


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//batch Scher,a
const BatchSchema =  mongoose.Schema({

  batchno : { 
    type : Number ,
    min : 0,
    max : 5 ,
    required : true
  },

  days : [String],

  time : {
    type : Date ,
    "default" : Date.now
  },

  medium: {
    type: String,
    required: true
  }
});

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true, 
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  batch: [BatchSchema],
  institutename: {
    type: String,
    required: true
  },
  address: {
    type: String,
     required: true
  },
  mobile: {
    type: Number,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username};
  User.findOne(query, callback);
}

module.exports.getAllUsers = function(callback){
  User.find(callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
module.exports.getUserBatch = function(id, callback){
  User.findById(id, callback).select('batch');
}
module.exports.addBatch = function(user, req, callback){
  user.batch.push({
    batchno : req.body.batchno,
    days: req.body.days,
    time: req.body.time,
    medium: req.body.medium
 });
 user.save(callback);
}