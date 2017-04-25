var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

var Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
