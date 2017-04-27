var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name: String,
  ibu: Number,
  description: String,
  labels: {
    medium: String
  },
  abv: Number,
  userDes: String,
  userRating: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

var Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
