import React from "react";

function Signup() {

    return(
        <div className="dropdown">
            <button className="btn btn-lg btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Signup</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <form className="px-4 py-3 dropdown-item">
                    <div className="form-group dropdown-item">
                        <label>Email address</label>
                        <input type="email" className="form-control dropdown-item" />
                    </div>
                    <div className="form-group dropdown-item">
                        <label> Confirm Email address</label>
                        <input type="email" className="form-control dropdown-item" />
                    </div>
                    <div className="form-group dropdown-item">
                        <label>Password</label>
                        <input type="password" className="form-control dropdown-item" />
                    </div>
                    <div className="form-group dropdown-item">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control dropdown-item" />
                    </div>
                    <button type="submit" className="btn btn-primary dropdown-item">Submit</button>
                </form>
                <div className="dropdown-divider dropdown-item" />
            </div>    
        </div>
    );
}

export default Signup;