import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1>TABLE SCRAPS</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/recipe/create" className={location.pathname === "/recipe/create" ? "navlink active" : "nav-link"}>Create Recipe</Link>
                        <Link to="/recipe/library" className={location.pathname === "/recipe/library" ? "navlink active" : "nav-link"}>Recipe Library</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;