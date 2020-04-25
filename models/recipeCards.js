const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeCardSchema = new Schema({
  recipes: [{
    item: {type: String},
    weight: {type: Number},
    price: {type: Number},
  }]
});

const RecipeCard = mongoose.model("RecipeCard", RecipeCardSchema);

module.exports = RecipeCard;