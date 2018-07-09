const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema

const BatchSchema =  mongoose.Schema({

  batchno : { 
    type : Number ,
    min : 0,
    max : 5 ,
    required : true
  },
  subject : {
    type : String
  },

  days : [String],

  // time : {
    //  type : Date 
    //  "default" : Date.now
  //  },

 
});


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
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  batch: [BatchSchema]

});





const User = module.exports = mongoose.model('User', UserSchema);

module.exports.userGetOne = function(req, res) {
  var id = req.params.userId;
  console.log('GET userId', id);

 User
    .findById(id)
    .exec(function(err, doc) {
      res
        .status(200)
        .json(doc);
    });

};


module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
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

module.exports.usergetone = function (req , res) {

  var userId = req.params.userid;
  console.log("get usereid" , userid);
  
User
  .findById(userid)
  .select('batch')
  .exec(function(err , doc) {
    console.log("Returned doc" , doc);
   res

  .status(200)
  .json(doc.batch);
  });

};
