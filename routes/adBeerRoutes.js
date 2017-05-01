var express = require("express");
var adminRouter = express.Router();
var Beer = require("../models/beer");

adminRouter.route("/")
  .get(function (req, res){
    Beer.find(function(err, beers){
      if (err) res.status(500).send(err);
      res.send(beers);
    })
  })

adminRouter.route("/:beerId")

  .delete(function(req, res){
    Beer.findByIdAndRemove({_id: req.params.beerId, user: req.params.user}, function (err, beer){
      if (err) res.status(500).send(err);
      res.send(beer);
    });
  })


  module.exports = adminRouter;
