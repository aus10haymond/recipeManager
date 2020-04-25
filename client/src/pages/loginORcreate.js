import React from 'react';
import './loginORcreate.css';
import { Link } from "react-router-dom";

function homePage() {
    return (
        <div>
            <div className="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <h1>Create an account</h1>
                                <div class="form-group">
                                    <label for="usernameinput">Email</label>
                                    <input type="email" class="form-control" id="usernameinput" />
                                </div>
                                <div class="form-group">
                                    <label for="passwordinput">Password</label>
                                    <input type="password" class="form-control" id="passwordinput" />
                                </div>
                                <Link to="/profile">
                                    <button type="submit" class="btn btn-primary">Signup</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <h1>login to your account</h1>
                                <div class="form-group">
                                    <label for="usernameinput">Email</label>
                                    <input type="email" class="form-control" id="usernameinput" />
                                </div>
                                <div class="form-group">
                                    <label for="passwordinput">Password</label>
                                    <input type="password" class="form-control" id="passwordinput" />
                                </div>
                                <Link to="/profile">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    );
}

export default homePage;