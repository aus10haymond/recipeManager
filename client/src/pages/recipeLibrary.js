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
                
                  <RecipeCard />
                  <RecipeCard />

            </div>
            <pre>
                {JSON.stringify(recipeRes)}
            </pre>
        </div>
    );
}

export default Library;