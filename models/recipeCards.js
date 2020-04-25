const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeCardSchema = new Schema({
  breakdown: [{
    item: {type: String},
    quantity: {type: Number},
    cost: {type: Number},
  }]
});

const RecipeCard = mongoose.model("RecipeCard", RecipeCardSchema);

module.exports = RecipeCard;