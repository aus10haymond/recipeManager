import React from "react";

import NavBar from "../components/navBar";
import Sidebar from "../components/sideNav";
import SideBar from "../components/sideNav";

function Create() {

    return(
        <div>
            <SideBar />
            <div className="container">
                <NavBar />
                <h1>Create a New Recipe</h1>
                    <br />
                <div className="jumbotron">
                    Recipe Form
                </div>
            </div>
        </div>
    );
}

export default Create;