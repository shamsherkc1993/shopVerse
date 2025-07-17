import React, { useState } from "react";

import Layout from "../layouts/Layout";

const ContactusUserMessage = (props) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const firstnameHandle = (e) => {
    setFirstname(e.target.value);
  };
  const lastnameHandle = (e) => {
    setLname(e.target.value);
  };
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const messageHandle = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactusUserMessage = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    };
    props.takeUserDetail(contactusUserMessage);

    setFirstname("");
    setLname("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="col-md-8 col-lg-8 pb-4">
      <form style={{ padding: "5rem 0" }} onSubmit={handleSubmit}>
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
                value={firstname}
                onChange={firstnameHandle}
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
                value={lastname}
                onChange={lastnameHandle}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="text-black" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={emailHandle}
          />
        </div>
        <div className="form-group mb-5">
          <label className="text-black" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={messageHandle}
          />
        </div>
        <button type="submit" className="btn btn-primary-hover-outline">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactusUserMessage;
