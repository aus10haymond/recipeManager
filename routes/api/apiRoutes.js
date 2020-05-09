const db = require("../../models");
const router = require("express").Router();
const passport = require("../../config/passport-config");


// PASSPORT/user routes 
router.post("/signup", ({ body }, res) => {
  const user = new db.User(body);
  user.generateHash(body.password);
  user.validPassword(body.password);

  db.User.create(user)
    .then(results => {
      res.json(results);
      res.redirect('/login')
    })
    .catch(err => {
      res.json(err);
      res.redirect('/signup')
    });
});

router.post("/login", passport.authenticate("local"), ({ body }, res) => {
  db.User.create(body)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.json(err);
    });
});

// link this to log out button in front end.
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      _id: req.user.id
    });
  }
});


// recipe routes
router.post("/recipe/post", ({ body }, res) => {
  db.Recipe.create(body)
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



// ingredients routes
router.get("/all", (req, res) => {
  db.Ingredient.find({})
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


router.post("/submit/many", ({ body }, res) => {
  db.Ingredient.insertMany(body.ingredients)
    .then(ingredientResults => {

      console.log(ingredientResults)
      let idArr = ingredientResults.map(ingredient => ingredient._id)
      console.log(idArr);

      return db.Recipe.create({
        name: body.name,
        directions: body.directions,
        ingredients: idArr
      })
    }
    )
    .then(moreResults => {
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
