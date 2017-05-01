var express = require("express");
var beerRouter = express.Router();
var Beer = require("../models/beer");

beerRouter.route('/')
  .get(function(req, res){
    Beer.find({user: req.user._id}, function(err, beers){
      if (err) res.status(500).send(err);
      res.send(beers);
    });
  })

  .post(function(req, res){
    var beer = new Beer(req.body);
    beer.user = req.user;
      beer.save(function (err, newBeer){
        if (err) res.status(500).send(err);
        res.status(201).send(newBeer);
      })
  });


beerRouter.route('/:beerId')
  .get(function(req, res){
    Beer.findOne({_id: req.params.beerId, user: req.user._id}, function(err, beer){
      if (err) res.status(500).send(err);
      if (!beer) res.status(404).send("Beer not found.");
      else res.send(beer);
    });
  })

  .put(function(req, res){
    Beer.findByIdAndUpdate({_id: req.params.beerId, user: req.user._id}, req.body, {new: true}, function (err, beer){
      if (err) res.status(500).send(err);
      res.send(beer);
    });
  })

  .delete(function(req, res){
    Beer.findByIdAndRemove({_id: req.params.beerId, user: req.user._id}, function(err, beer){
      if (err) res.status(500).send(err);
      res.sent(beer);
    })
  })


  module.exports = beerRouter;
