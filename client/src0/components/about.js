import React from "react";

function About() {

    return (
        <div>
            <h1>ABOUT US</h1>
                <br />
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Text or an image about how our app is useful</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Text or an image about how our app is useful</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;