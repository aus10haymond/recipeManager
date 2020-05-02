import React, {useState} from "react";

function Login2() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = event =>{
        event.preventDefault();

        //if(email === confirmEmail)

        if(email && password) {
            //api call
            setEmail("");
            setPassword("");
        }
    }

  return (
    <div className="container">
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
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!email || !password}>
            Submit
          </button>
        </form>
    </div>
  );
}

export default Login2;
