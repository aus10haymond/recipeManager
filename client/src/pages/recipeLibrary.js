import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import RecipeCard from "../components/recipeCard";
import SideBar from "../components/sideNav";
import API from "../utils/API";


function Library() {

    const [recipeRes, setRecipeRes] = useState([]);

    useEffect(() => {
        API.getSavedRecipes().then(res => {
            console.log(res.data)
            setRecipeRes(res.data)
        })
    }, [])

    return (
        <div>
            <SideBar />
            <div className="container">
                <NavBar />
                <h1>Recipe Library</h1>

                {recipeRes &&
                    recipeRes.map(info => (
                        <RecipeCard
                            key={info._id}
                            name={info.name}
                            directions={info.directions}
                            ingredients={info.ingredients}
                        />
                    ))
                }
            </div>
            <pre>
                {JSON.stringify(recipeRes)}
            </pre>
        </div>
    );

}

export default Library;