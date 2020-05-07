const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {type: String},
    directions: {type: String},
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: "Ingredient"
        }
    ]
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;