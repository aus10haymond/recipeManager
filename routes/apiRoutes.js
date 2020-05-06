// const axios = require("axios");
const db = require("../models");
// const mongoose = require("mongoose");

function apiRoutes(app) {
  // routes for user
  // app.post("/signup", ({ body }, res) => {
  //   db.User.create(body)
  //     .then(results => {
  //       res.json(results);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  // app.post("/login", ({ body }, res) => {
  //   db.Us.create(body)
  //     .then(results => {
  //       res.json(results);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  // routes for ingreidents
  app.get("/all", (req, res) => {
    db.Ingredient.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/submit", ({ body }, res) => {
    db.Ingredient.create(body)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/find/:id", (req, res) => {
    db.Ingredient.findOne({
      _id: req.params.id
    })
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/update/:id", ({ body, params }, res) => {
    db.Ingredient.findByIdAndUpdate(params.id, {
      $set: body
    })
      .then(dbRecipe => {
        res.json(dbRecipe);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.delete("/delete/:id", (req, res) => {
    db.Ingredient.remove({
      _id: req.params.id
    })
      .then(dbRecipe => {
        res.json(dbRecipe);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.delete("/clearall", (req, res) => {
    db.Ingredient.remove({})
      .then(dbRecipe => {
        res.json(dbRecipe);
      })
      .catch(err => {
        res.json(err);
      });
  });
};

module.exports = apiRoutes;