import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

function Contact() {

    return (
        <div>
            <section className="page-section bg-light" id="learn">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact</h2>
                        <h3 className="section-subheading text-muted">Any Questions? We're here to talk.</h3>
                    </div>

                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3" />
                            <div className="col-md-6">
                                <form>
                                    <p className="h5 text-center mb-4">Write to us</p>
                                    <div className="grey-text">
                                        <div classname="form-group">
                                            <label>Your Name</label>
                                            <input className="form-control" type="text" placeholder="John Smith" />
                                        </div>
                                        <div classname="form-group">
                                            <label for="email">Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                        </div>
                                        <div classname="form-group">
                                            <label>Subject</label>
                                            <input className="form-control" type="text" placeholder="Table Scraps" />
                                        </div>
                                        <div classname="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" rows="4" placeholder="Your message here..."/>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <button  className="btn btn-primary" outline color="secondary">
                                            Send
                                                <icon far icon="paper-plane" className="ml-1" />
                                        </button>
                                    </div>
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;