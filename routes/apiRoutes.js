const axios = require("axios");
const db = require("../models");

// TEMPLATES BELOW:
// function apiRoutes(app) {
//   app.get("/api/googlebooks/:title", function(req, res) {
//     const title = req.params.title
//     axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title).then(function(results) {
//       res.json(results.data.items);
//     });
//   });

//   app.post("/api/books", function(req, res) {
//     const newBook = req.body
//     console.log(newBook);
//       db.Book.create(newBook).then(function(results) {
//         res.json(results);
//       });
//   });
// }

module.exports = apiRoutes;