import React from "react";

import Login from "./login";
import Signup from "./signup";

function HomeJumbo() {

    return(
        
        <div className="jumbotron">
            <h1 className="display-4">TABLE SCRAPS</h1>
                <br />
            <Login />
                <br />
            <Signup />
        </div>
    );
}

export default HomeJumbo;