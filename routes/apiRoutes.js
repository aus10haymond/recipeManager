const axios = require("axios");
const db = require("../models");
const mongoose = require("mongoose");

function apiRoutes(app) {
  app.get("/api/recipes/:recipe", function (req, res) {
    // const recipe = req.params.recipe
    // axios.get("https://api.spoonacular.com/recipes/search?apiKey=b3d34723f7fc4467aa5d1becb4b57db6&query=" + recipe).then(function (results) {
    //   res.json(results.data);
    // });

  
  });



  app.post("/api/ingredients", function (req, res) {
     
    
    const newIngredient = {
      name: req.body.name,
      brand: req.body.brand,
      cost: req.body.cost,
      size_weight: req.body.size_weight
    }
    db.Ingredient.create(newIngredient).then(results => {
  
      const newNutritionInfo = {
        nutrientName: req.body.nutrientName,
        unitName: req.body.unitName,
        value: req.body.value,
      }
      
      db.Ingredient.findOneAndUpdate(
        { _id: results._id },
        { $push: { nutritioninfo: newNutritionInfo } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log(success);
            res.json("success");
          }
        });
      
    })
  })

  app.get("/api/ingredients", function (req, res) {
    db.Ingredient.find().then(results => {
      res.json(results);
    })
  })

  app.delete("/api/ingredients/:id", function (req, res) {
    db.Ingredient.remove().then(results => {
      res.json(results);
    })
  })

  app.put("/api/ingredients/:id", function (req, res) {

    const newNutritionInfo = {
      nutrientName: req.body.nutrientName,
      unitName: req.body.unitName,
      value: req.body.value,
    }

    const newIngredient = {
      name: req.body.name,
      brand: req.body.brand,
      cost: req.body.cost,
      size_weight: req.body.size_weight
    }

    const id = mongoose.Types.ObjectId(req.params.id)
    db.Ingredient.update({
      _id: id
    }, newIngredient).then(results => {

      db.Ingredient.findOneAndUpdate(
        { _id: id },
        { $push: { nutritioninfo: newNutritionInfo } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log(success);
            res.json("success");
          }
        });
    })



  })
};

module.exports = apiRoutes;