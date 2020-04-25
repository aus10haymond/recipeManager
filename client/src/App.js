import React from 'react';
import HomePage from './pages/loginORcreate';
import ProfilePage from './pages/profile';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
    </Router>
  );
}

export default App;
