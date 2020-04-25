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
                <br />
            <a class="btn btn-primary" href="/recipe/create" role="button">ENTER</a>

        </div>
    );
}

export default HomeJumbo;