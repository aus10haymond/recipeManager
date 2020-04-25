import React from "react";

import HomeJumbo from "../components/homeJumbotron";
import About from "../components/about";

function Home() {

    return(
        <div className="container">
            <HomeJumbo />
                <hr />
                <br />
            <About />

        </div>
    );
}

export default Home;