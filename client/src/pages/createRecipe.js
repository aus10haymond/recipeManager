import React, { useState, useEffect } from "react";
​
import NavBar from "../components/navBar";
import Sidebar from "../components/sideNav";
import SideBar from "../components/sideNav";
​
import API from "../utils/API"
​
function Create() {
  //console.log("api key", process.env.FOOD_DATA_APIKEY)
​
  const [newInput, setNewInput] = useState("");
  const [ingredientRes, setIngredientRes] = useState([]);
  const [currentIngredients, setCurrentIngredients] = useState([]);
​
  useEffect(()=>{
    if(newInput) {
        API.getIngredients(newInput)
        .then(res=>{
            console.log(res.data.foods)
            setIngredientRes(res.data.foods.slice(0,20))
        })
    }   
  },[newInput])
​
  const remakeIngredient = ingredient => {
    let newIngredient = {
      name: ingredient.description,
      brand: ingredient.brandOwner,
      nutritioninfo: ingredient.foodNutrients
    }
​
    setCurrentIngredients([...currentIngredients, newIngredient])
  }
​
  //gonna be made in this card:
  //list of ingredients including % of recipe by weight up to 100% (user adds these by gram or w/e)
  //total cost of ingredients (add individually by ingredient as part of total bag/package) also per serving
  //nutritional info per serving
  //steps (one long string or individually by step one, two etc.)
  //servings
​
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
​
  //Company/User: recipes array, name, ingredients array (all you've added, or that you've used)
​
​
  return (
    <div>
      <SideBar />
      <div className="container">
        <NavBar />
​
        {/* .map for currentIngredients */}
​
        <section className="page-section" id="create">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Create a New Recipe
              </h2>
              <h3 className="section-subheading text-muted">
                Create a new recipe and add it to your book.
              </h3>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="newIngredients">Search New Ingredients</label>
                <input
                  type="text"
                  className="form-control"
                  id="newIngredients"
                  placeholder="cheese"
                  value={newInput}
                  onChange={event=>setNewInput(event.target.value)}
                />
              </div>
              {/* <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Example select</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                      <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> */}
              <button>Search</button>
            </form>
          </div>
            {ingredientRes.map(ingredient=>(
              <div>
                <p>{ingredient.description}</p>
                {ingredient.brandOwner && (<p>Brand: {ingredient.brandOwner}</p>)}
                <button onClick={()=>remakeIngredient(ingredient)}>ADD INGREDIENT</button>
              </div>
            ))}
​
        </section>
        <pre>
            {/* {JSON.stringify(ingredientRes, 0, 2)} */}
        </pre>
      </div>
    </div>
  );
}
​
export default Create;