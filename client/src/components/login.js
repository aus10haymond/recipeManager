import React from "react";

function Login() {

    return(
        <div>
            <h3>Login</h3>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
}

export default Login;