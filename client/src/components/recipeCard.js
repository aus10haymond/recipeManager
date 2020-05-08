import React from "react";

function RecipeCard(props) {

    return (
        <div>
            <br />
            <div className="row">
                <div className="card col-sm-12">
                    <h3 className="card-title">*recipe name goes here*</h3>
                    <ul>
                        <h4>Ingredient: {props.name}</h4>
                        <h4>Brand: {props.brand}</h4>
                        <h4>Nutritional INfo: {props.nutritioninfo}</h4>
                        <h4>weight: {props.totalWeight}g</h4>
                        <h4>cost: ${props.totalCost}</h4>
                        <h4>recipe weight: {props.weightInRecipe}g</h4>
                        <h4>recipe cost: ${props.costInRecipe}</h4>
                    </ul>
                </div>
            </div>
            <br />
        </div>
    );
}

export default RecipeCard;