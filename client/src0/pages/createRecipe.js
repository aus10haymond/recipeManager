import React, { useState, useEffect } from "react";

import NavBar from "../components/navBar";
import Sidebar from "../components/sideNav";
import SideBar from "../components/sideNav";

import API from "../utils/API"

function Create() {
  //console.log("api key", process.env.FOOD_DATA_APIKEY)

  const [newInput, setNewInput] = useState("");
  const [ingredientRes, setIngredientRes] = useState([]);

  useEffect(()=>{
    if(newInput) {
        API.getIngredients(newInput)
        .then(res=>{
            console.log(res.data.foods)
            setIngredientRes(res.data.foods)
        })
    }   
  },[newInput])

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
        </section>
        <pre>
            {JSON.stringify(ingredientRes, 0, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Create;
