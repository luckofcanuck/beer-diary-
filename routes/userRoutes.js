var express = require("express");
var userRoute = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

userRoute.get("/", function (req, res){
  //it knows which user's id to search because jwt is required...
  User.findById(req.user._id, function (err, user){
    res.send({user: user.withoutPassword()});
    console.log({user: user.withoutPassword()})
  })
})


module.exports = userRoute;
