const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: { type: String },
  brand: { type: String },
  nutritioninfo: { type: String },
  totalWeight: { type: String },
  totalCost: { type: String },
  weightInRecipe: { type: String },
  costInRecipe: { type: String }
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;