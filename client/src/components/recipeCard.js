import React from "react";

function RecipeCard(props) {
  return (
    <div>
      <br />
      <div className="row">
        <div className="card col-sm-12">
          <h3 className="card-title">{props.name}</h3>
          <h4>Ingredients</h4>
          <table id="excelTable" className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Ingredient Name</th>
                <th scope="col">Ingredient Brand</th>
                <th scope="col">Weight in Recipe (grams)</th>
                <th scope="col">Weight % in Recipe</th>
                <th scope="col">Cost in Recipe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.ingredients.map((ingredient) => (
                <tr scope="row" key={ingredient._id}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.brand}</td>
                  <td>{ingredient.weightInRecipe}g</td>
                  <td>{Math.round(ingredient.weightInRecipe/props.ingredients.reduce(
                    (sum, selectedIngredient) =>
                      sum + parseInt(selectedIngredient.weightInRecipe),
                    0
                  )*100)}%</td>
                  <td>${ingredient.costInRecipe}</td>
                </tr>
              ))}
              <tr>
                <td>Totals:</td>
                <td></td>
                <td>
                  {props.ingredients.reduce(
                    (sum, selectedIngredient) =>
                      sum + parseInt(selectedIngredient.weightInRecipe),
                    0
                  )}g
                </td>
                <td>100%</td>
                <td>
                  ${props.ingredients.reduce(
                    (sum, selectedIngredient) =>
                      sum + parseInt(selectedIngredient.costInRecipe),
                    0
                  )}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h4>Instructions</h4>
          <p>{props.directions}</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default RecipeCard;
