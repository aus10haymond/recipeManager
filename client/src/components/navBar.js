import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();
    // const link = document.getElementById("logout");
    // const locationUrl = location.pathname;


    // if (locationUrl === "/login" || locationUrl === "/signup") {
    //     link.innerText = "Return to Home";
    // }

    // if (locationUrl === "/") {
    //     link.innerText = "";
    // }

    // else {
    //     link.innerText = "Logout"
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1>TABLE SCRAPS</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="navlink active" id="logout" ></Link>
                </div>
                </div>
            </nav>
        </div >
    );
}

export default NavBar;