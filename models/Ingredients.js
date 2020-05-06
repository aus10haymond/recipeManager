const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: { type: String },
  brand: { type: String },
  cost: { type: String },
  size_weight: { type: String },
  // nutritioninfo: [{
  nutrientName: { type: String },
  unitName: { type: String },
  value: { type: String },
  // }]
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;