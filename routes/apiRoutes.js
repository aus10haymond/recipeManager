const axios = require("axios");
const db = require("../models");

function apiRoutes(app) {
  app.get("/api/recipes/:recipe", function (req, res) {
    const recipe = req.params.recipe
    axios.get("https://api.spoonacular.com/recipes/search?apiKey=b3d34723f7fc4467aa5d1becb4b57db6&query=" + recipe).then(function (results) {
      res.json(results.data);
    });
  });

  // app.post("/api/recipes", function (req, res) {
  //   const newRecipe = req.body
  //   console.log(newBook);
  //   db.Recipe.create(newRecipe).then(function (results) {
  //     res.json(results);
  //   });
  // });

  // app.delete("/api/recipe/:id", function (req, res) {
  //   const id = req.params.id
  //   db.Recipe.remove({ _id: id }).then(function (results) {
  //     res.json(results);
  //   });
  // });

  // app.get("/api/savedRecipe", function (req, res) {
  //   db.Recipe.find().then(function (results) {
  //     res.json(results);
  //   });
  // });
};

module.exports = apiRoutes;