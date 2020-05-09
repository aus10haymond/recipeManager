import React, {useEffect, useState} from "react";
import API from "../utils/API"

import NavBar from "../components/navBar";
import RecipeCard from "../components/recipeCard";
import SideBar from "../components/sideNav";


function Library() {

    const [recipeRes, setRecipeRes] = useState([]);

    useEffect(()=>{
        API.getSavedRecipes().then(res=>{
            console.log(res.data)
            setRecipeRes(res.data)
        })
    },[])
    
    return(
        <div>
            <SideBar />
            <div className="container">
            <NavBar />
                <h1>Recipe Library</h1>                
                {recipeRes.map((recipe)=> (
                  <RecipeCard 
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    directions={recipe.directions}
                  />
                ))}
                

            </div>
        </div>
    );
}

export default Library;