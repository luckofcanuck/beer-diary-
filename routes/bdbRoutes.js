// var express = require("express");
// var bdbRouter = express.Router();
// var request = require("request");
//
//
// bdbRouter
//   .get("/bdb/:beer", function (req, res){
//     console.log(req.params.beer);
//     request("http://api.brewerydb.com/v2/search/?key=d6550ba5badf8a91d81b906e5116d79f&type=beer&q=" + req.params.beer, function (err, res, body){
//       if (err) throw err;
//       console.log("hi");
//       res.send(body);
//     });
//   })
//
// module.exports = bdbRouter;
