import React from "react";



function HomeJumbo() {

    return(
        <header className="masthead">
            <div className="container">
                <div className="masthead-heading text">Table Scraps</div>
                <div className="masthead-subheading">The recipe costing app designed to reduce food waste for your business.</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#learn">Learn More</a>
                <br />
                <br />
                {/* <a className="btn btn-primary btn-xl text-uppercase" href="/recipe/create">Get Started</a> */}
            </div>
        </header>
    );
}

export default HomeJumbo;