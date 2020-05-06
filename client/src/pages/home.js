import React from "react";

import HomeJumbo from "../components/homeJumbotron";
import About from "../components/about";
import Pricing from "../components/pricing";
import Contact from "../components/contact";
import UserNav from "../components/UserNav";

function Home() {

    return(
        <div className="container">
            <UserNav />
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