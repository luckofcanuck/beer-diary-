var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var userRouter = require("./routes/userRoutes");
var beerRouter = require("./routes/beerRoutes");
// var bdbRouter = require("./routes/bdbRoutes");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");
var request = require("request");


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/user", userRouter);
app.use("/api/beer", beerRouter);
// app.use("/bdb", bdbRouter);
app.use("/auth/change-password", expressJwt({secret: config.secret}));
app.use("/auth", require("./routes/authRoutes"));


app.use(express.static(path.join(__dirname, "public")));



mongoose.connect(config.database, function (err){
  if (err) throw err;
  console.log("Successfully connected to the database");
})




app.get("/bdb/:beer", function (req, res){
	console.log(req.params.beer);
  request("http://api.brewerydb.com/v2/search/?key=d6550ba5badf8a91d81b906e5116d79f&type=beer&q=" + req.params.beer, function (err, response, body){
    if (err) throw err;
    res.send(body);
  });
})


app.listen(5000, function (){
  console.log("Server listening on 5000")
})
