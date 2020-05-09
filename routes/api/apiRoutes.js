const db = require("../../models");
const router = require("express").Router();


  // routes for user
  router.post("/signup", ({ body }, res) => {
    const user = new db.User(body);
    user.generateHash(body.password);

    db.User.create(user)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.post("/login", ({ body }, res) => {
    db.User.create(body)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });


  // routes for ingreidents
  router.get("/all", (req, res) => {
    db.Ingredient.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/recipe/all", (req, res) => {
    db.Recipe.find({})
      .populate("ingredients")
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.post("/submit", ({ body }, res) => {
    db.Ingredient.create(body)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //full route: /api/submit/many
  router.post("/submit/many", ({ body }, res) => {
    db.Ingredient.insertMany(body.ingredients)
      .then(ingredientResults => {

        console.log(ingredientResults)
        let idArr = ingredientResults.map(ingredient=>ingredient._id)
        console.log(idArr);

        return db.Recipe.create({
          name: body.name,
          directions: body.directions,
          ingredients: idArr
        })
      }
      )
      .then(moreResults=>{
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/find/:id", (req, res) => {
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

  router.post("/update/:id", ({ body, params }, res) => {
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

  router.delete("/delete/:id", (req, res) => {
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

  router.delete("/clearall", (req, res) => {
    db.Ingredient.remove({})
      .then(dbRecipe => {
        res.json(dbRecipe);
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports = router;