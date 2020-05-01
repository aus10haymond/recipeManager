import React from "react";

import HomeJumbo from "../components/homeJumbotron";
import About from "../components/about";
import Pricing from "../components/pricing";
import Contact from "../components/contact";

function Home() {

    return(
        <div className="container">
            <HomeJumbo />
                <br />
            <About />
                <br />
            <Pricing />
                <br />
            <Contact />
                <br />

        </div>
    );
}

export default Home;