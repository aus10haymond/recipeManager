import React, {useState} from "react";
import  { Link } from "react-router-dom";

import NavBar from "../components/navBar";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormSubmit = event =>{
        event.preventDefault();

        //if(email === confirmEmail)

        if(email && password && confirmEmail === email && confirmPassword === password) {
            //api call
            setEmail("");
            setPassword("");
        }
    }

  return (
    <div className="container">
        <NavBar />
        <br />
        <h1>Sign Up</h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={event=>setEmail(event.target.value)}
            />
            <label htmlFor="exampleInputEmail1"> Confirm Email address</label>
            <input
              type="email"
              className="form-control"
              id="confirmExampleInputEmail1"
              aria-describedby="emailHelp"
              value={confirmEmail}
              onChange={event=>setConfirmEmail(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={event=>setPassword(event.target.value)}
            />
            <label htmlFor="confirmexampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmExampleInputPassword1"
              value={confirmPassword}
              onChange={event=>setConfirmPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!email || !password}>
            Submit
          </button>
        </form>
        <br />
        <hr />
        <Link to="/" className="navlink active" id="logout" >Back to Home</Link>
    </div>
  );
}

export default Signup;