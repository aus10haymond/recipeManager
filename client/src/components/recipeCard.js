import React from "react";

function RecipeCard(props) {

    return (
        <div>
            <br />
            <div className="row">
                <div className="card col-sm-12">
                    <h3 className="card-title">{props.name}</h3>
                    <ul>
                        <p><strong>Directons: </strong>{props.directions}</p>
                        {/* <h4>Ingredients: {props.ingredients}</h4> */}
                    </ul>
                </div>
            </div>
            <br />
        </div>
    );
}

export default RecipeCard;