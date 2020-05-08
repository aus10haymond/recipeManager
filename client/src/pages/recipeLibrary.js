import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import RecipeCard from "../components/recipeCard";
import SideBar from "../components/sideNav";
import API from "../utils/API";

function Library() {

    const [recipeInfo, setRecipeInfo] = useState();

    useEffect(() => {
        API.getSavedIngredients(recipeInfo).then((res) => {
            console.log(res);
            setRecipeInfo(res.data);
        });
    }, []);

    return (
        <div>
            <SideBar />
            <div className="container">
                <NavBar />
                <h1>Recipe Library</h1>

                {recipeInfo &&
                    recipeInfo.map(info => (
                        <RecipeCard
                            key={info._id}
                            name={info.name}
                            brand={info.brand}
                            // nutritioninfo={info.nutritioninfo}
                            totalWeight={info.totalWeight}
                            totalCost={info.totalCost}
                            weightInRecipe={info.weightInRecipe}
                            costInRecipe={info.costInRecipe}
                        />
                    ))}
            </div>
        </div>
    );

}

export default Library;