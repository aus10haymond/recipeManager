import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Create from "./pages/createRecipe";
import Library from "./pages/recipeLibrary";
import NoPage from "./pages/noPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/recipe/create" component={Create} />
                <Route exact path="/recipe/library" component={Library} />
                <Route component={NoPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;