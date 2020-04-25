import React from "react";

import NavBar from "../components/navBar";
import RecipeCard from "../components/recipeCard";
import SideBar from "../components/sideNav";

function Library() {

    return(
        <div>
            <SideBar />
            <div className="container">
            <NavBar />
                <h1>Recipe Library</h1>                
                
                  <RecipeCard />
                  <RecipeCard />
                  <RecipeCard />
            </div>
        </div>
    );
}

export default Library;