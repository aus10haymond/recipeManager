const axios = require("axios");
const db = require("../models");

function apiRoutes(app) {
  app.get("/api/recipes/:recipe", function (req, res) {
    const recipe = req.params.recipe
    axios.get("https://api.spoonacular.com/recipes/search?apiKey=b3d34723f7fc4467aa5d1becb4b57db6&query=" + recipe).then(function (results) {
      res.json(results.data);
    });
  });

  // app.post("/api/books", function (req, res) {
  //   const newBook = req.body
  //   console.log(newBook);
  //   db.Book.create(newBook).then(function (results) {
  //     res.json(results);
  //   });
  // });

  // app.delete("/api/books/:id", function (req, res) {
  //   const id = req.params.id
  //   db.Book.remove({ _id: id }).then(function (results) {
  //     res.json(results);
  //   });
  // });

  // app.get("/api/savedBooks", function (req, res) {
  //   db.Book.find().then(function (results) {
  //     res.json(results);
  //   });
  // });
};

module.exports = apiRoutes;