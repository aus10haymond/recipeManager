const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {type: String},
  brand: {type: String},
  totalCost: {type: String}, 
  totalWeight: {type: String},
  nutritioninfo: {type: Array},
  weightInRecipe: {type: String},
  costInRecipe: {type: String}
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;