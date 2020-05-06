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
                        <p className="text-muted">Free! We WANT you to reduce food waste! Limit is 20 recipes.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-users fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">2-5 Users</h4>
                        <p className="text-muted">Pay a small fee to remove adds. Limit is 30 recipes.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-infinity fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Unlimited Users</h4>
                        <p className="text-muted">Pay a fee, no adds, unlimited recipes.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Pricing;