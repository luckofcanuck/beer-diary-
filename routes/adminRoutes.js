var express = require("express");
var adminRouter = express.Router();
var User = require("../models/user");


adminRouter.route("/")
  .get(function (req, res){
    User.find(function(err, users){
      if (err) res.status(500).send(err);
      res.send(users);
    })
  })

adminRouter.route("/:userId")
  .put(function(req, res){
    console.log(req.params);
    User.findByIdAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user){
      if (err) res.status(500).send(err);
      res.send(user);
    })
  })

  .delete(function(req, res){
    console.log(req.params);
    User.findByIdAndRemove({_id: req.params.userId}, function (err, user){
      if (err) res.status(500).send(err);
      res.send(user);
    });
  })




  module.exports = adminRouter;
