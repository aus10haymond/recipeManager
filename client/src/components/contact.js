import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

function Contact() {

    return (
        <div>
            <section className="page-section bg-light" id="learn">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Pricing</h2>
                        <h3 className="section-subheading text-muted">Choose what works best for your company's needs</h3>
                    </div>

                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6">
                                <form>
                                    <p className="h5 text-center mb-4">Write to us</p>
                                    <div className="grey-text">
                                        <input
                                            label="Your name"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <input
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <input
                                            label="Subject"
                                            icon="tag"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <input
                                            type="textarea"
                                            rows="2"
                                            label="Your message"
                                            icon="pencil-alt"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button outline color="secondary">
                                            Send
                                                <icon far icon="paper-plane" className="ml-1" />
                                        </button>
                                    </div>
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