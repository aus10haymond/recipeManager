import React, { useState, useEffect } from "react";

import NavBar from "../components/navBar";
import SideBar from "../components/sideNav";
import API from "../utils/API";
import ExportCSV from "../components/exportCSV";

function Create() {
  //console.log("api key", process.env.FOOD_DATA_APIKEY)

  const [newInput, setNewInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [directionsInput, setDirectionsInput] = useState("");
  const [ingredientRes, setIngredientRes] = useState([]);
  const [currentIngredients, setCurrentIngredients] = useState([]);

  useEffect(() => {
    if (newInput) {
      //API get call to /api/all

      API.getIngredients(newInput).then((res) => {
        console.log(res.data.foods);
        setIngredientRes(res.data.foods.slice(0, 20));
      });
    }
  }, [newInput]);

  useEffect(() => {
    let ingredientsCopy = [...currentIngredients];

    let totalWeight = 0;
    ingredientsCopy.forEach((ingredient) => {
      totalWeight = totalWeight + ingredient.weightInRecipe;
    });

    totalWeight = console.log("total weight = " + totalWeight);

    //setCurrentIngredients(ingredientsCopy);
  }, [currentIngredients]);

  const remakeIngredient = (ingredient) => {
    let newIngredient = {
      name: ingredient.description,
      brand: ingredient.brandOwner,
      nutritioninfo: ingredient.foodNutrients,
      totalWeight: "",
      totalCost: "",
      weightInRecipe: "",
      costInRecipe: "",
    };

    setCurrentIngredients([...currentIngredients, newIngredient]);
  };

  const addStuffToIngredient = (event) => {
    let ingredientsCopy = [...currentIngredients];
    let value = event.target.value;
    let name = event.target.name;
    let index = event.target.id;
    console.log(value, name, index);

    ingredientsCopy[index][name] = value;
    // ingredientsCopy[index]["totalWeight"]
    // ingredientsCopy[index].totalWeight

    ingredientsCopy[index].costInRecipe =
      (ingredientsCopy[index].totalCost / ingredientsCopy[index].totalWeight) *
      ingredientsCopy[index].weightInRecipe;

    setCurrentIngredients(ingredientsCopy);
  };

  const deleteIngredient = (event) => {
    let ingredientsCopy = [...currentIngredients];
    let index = event.target.id;

    ingredientsCopy.splice(index, 1);

    setCurrentIngredients(ingredientsCopy);
  };

  const saveRecipe = (event) => {
    event.preventDefault();
    console.log("currentIngredients", currentIngredients)
    let data = {
      name: nameInput,
      ingredients: currentIngredients,
      directions: directionsInput
    }

    API.saveIngredients(data)
      .then(res=>{
        console.log("did post")
        window.location.replace("/recipe/library")
      })
      .catch(err=>{
        console.log(err)
      })
  };

  //gonna be made in this card:
  //list of ingredients including % of recipe by weight up to 100% (user adds these by gram or w/e)
  //total cost of ingredients (add individually by ingredient as part of total bag/package) also per serving
  //nutritional info per serving
  //steps (one long string or individually by step one, two etc.)
  //servings
  //Models:
  //Recipe.js
  //Ingredient.js: name, brand, cost, all nutritional info, size/weight
  //nutritioninfo[
  //   {
  //     nutrientName: String
  //     unitName: String
  //     value: Number
  //   }
  // ]

  //Company/User: recipes array, name, ingredients array (all you've added, or that you've used)

  return (
    <div>
      <SideBar />
      <div className="container">
        <NavBar />
        <section className="page-section" id="create">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Create a New Recipe
              </h2>
              <h3 className="section-subheading text-muted">
                Create a new recipe and add it to your library.
              </h3>
            </div>
            <ExportCSV
              csvData={currentIngredients}
              fileName={"exportedRecipe"}
            />
            <div className="form-group">
              <label htmlFor="name">
                <br></br>Recipe Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enchiladas"
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
              />
              <label htmlFor="directions">
                <br></br>Directions:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="directions"
                placeholder="Cook it"
                value={directionsInput}
                onChange={(event) => setDirectionsInput(event.target.value)}
              />
            </div>
            {currentIngredients.length !== 0 ? (
              <>
                <table id="excelTable" className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Ingredient Name</th>
                      <th scope="col">Ingredient Brand</th>
                      <th scope="col">Ingredient Total Weight (grams)</th>
                      <th scope="col">Ingredient Total Cost</th>
                      <th scope="col">Weight in Recipe (grams)</th>
                      <th scope="col">Weight % in Recipe</th>
                      <th scope="col">Cost in Recipe</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentIngredients.map((ingredient, i) => (
                      <tr scope="row" key={i}>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.brand}</td>
                        <td>
                          <input
                            id={i}
                            name={"totalWeight"}
                            value={currentIngredients[i].totalWeight}
                            onChange={addStuffToIngredient}
                          />
                        </td>
                        <td>
                          <input
                            id={i}
                            name={"totalCost"}
                            value={currentIngredients[i].totalCost}
                            onChange={addStuffToIngredient}
                          />
                        </td>
                        <td>
                          <input
                            id={i}
                            name={"weightInRecipe"}
                            value={currentIngredients[i].weightInRecipe}
                            onChange={addStuffToIngredient}
                          />
                        </td>
                        <td></td>
                        <td>{ingredient.costInRecipe}</td>
                        <td>
                          <span
                            id={i}
                            onClick={deleteIngredient}
                            style={{ color: "red", cursor: "pointer" }}
                          >
                            X
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Totals:</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{currentIngredients.reduce((sum, selectedIngredient)=> sum + parseInt(selectedIngredient.weightInRecipe),0)}</td>
                      <td></td>
                      <td>{currentIngredients.reduce((sum, selectedIngredient)=> sum + selectedIngredient.costInRecipe,0)}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={saveRecipe}>Save Recipe to Library</button>
              </>
            ) : (
              <div>To create a new recipe to add to your library: search your ingredients below and click "add ingredient". Add your ingredient, its total weight, and total cost. Your ingredient will be stored in your inventory to be used again. When you are done, add the recipe to your library.  </div>
            )}

            {/* <form onSubmit={e=>e.preventDefault()}> */}
            <div className="form-group">
              <label htmlFor="newIngredients">
                <br></br>Search New Ingredients to Add to Your Recipe Below:
              </label>
              <input
                type="text"
                className="form-control"
                id="newIngredients"
                placeholder="cheese"
                value={newInput}
                onChange={(event) => setNewInput(event.target.value)}
              />
            </div>
            {/* {
                     
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> } */}

            {/* </form> */}
          </div>
          {ingredientRes.map((ingredient) => (
            <div>
              <p>{ingredient.description}</p>
              {ingredient.brandOwner && <p>Brand: {ingredient.brandOwner}</p>}
              <button onClick={() => remakeIngredient(ingredient)}>
                ADD INGREDIENT
              </button>
            </div>
          ))}
        </section>
        <pre>{/* {JSON.stringify(ingredientRes, 0, 2)} */}</pre>
      </div>
    </div>
  );
}

export default Create;
