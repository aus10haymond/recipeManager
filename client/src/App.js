import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Create from "./pages/createRecipe";
import Library from "./pages/recipeLibrary";
import NoPage from "./pages/noPage";
import Login from "./components/login"

import "./App.css"
import Signup from "./components/signup";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/recipe/create" component={Create} />
                <Route exact path="/recipe/library" component={Library} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route component={NoPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;