import React from "react";

function About() {

    return (
        <div>
           <section className="page-section bg-light" id="learn">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Eliminating food waste at all three stages of the process.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Before</h4>
                        <p className="text-muted">Cost your entire recipe library down to the gram using our recipe builder. </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-laptop fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">During</h4>
                        <p className="text-muted">Share your online database of all your recipes with your employees, change the yield on the fly, and export your recipes to excel.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-lock fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">After</h4>
                        <p className="text-muted">Print nutrition labels of your prepared recipes, to safely and easily donate to shelters and food banks.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default About;