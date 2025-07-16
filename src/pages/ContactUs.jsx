import React from "react";
import Layout from "../layouts/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 style={{ padding: "5rem 0" }}>Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 pb-4">
                <form style={{ padding: "5rem 0" }}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="fname">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="lname">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="email">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group mb-5">
                    <label className="text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary-hover-outline"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
