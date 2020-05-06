import React from "react";

function Pricing() {

    return (
        <div>
           <section className="page-section bg-light" id="learn">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Pricing</h2>
                    <h3 className="section-subheading text-muted">Choose what works best for your company's needs</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-user fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Single User</h4>
                        <p className="text-muted">Cost your recipes down to the gram.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-users fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">2-5 Users</h4>
                        <p className="text-muted">Create an online database of all your store's recipes, and change the yield on demand.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-infinity fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Unlimited Users</h4>
                        <p className="text-muted">Export your recipes to excel or invite your teammates with one click.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Pricing;