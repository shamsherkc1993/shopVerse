import React, { useState } from "react";
import Layout from "../layouts/Layout";
import ContactusUserMessage from "../components/ContactusUserMessage";
const ContactUs = () => {
  const [allmessage, setAllmessage] = useState([]);

  console.log(allmessage);

  const takeUserDetail = (enteredUserDetail) => {
    const userMessage = {
      ...enteredUserDetail,
      id: Math.random().toString(),
    };
    setAllmessage([userMessage]);
  };
  return (
    <Layout>
      {allmessage.length == 0 ? (
        <>
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
                  <ContactusUserMessage takeUserDetail={takeUserDetail} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ textAlign: "center", padding: "30px 0" }}>
            Message sent successFully
          </h3>
          {allmessage.map((msg) => (
            <div
              key={msg.id}
              className="p-3 mb-3 border rounded"
              style={{ textAlign: "center" }}
            >
              <p>
                <strong>Name:</strong> {msg.firstname} {msg.lastname}
              </p>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
            </div>
          ))}
        </>
      )}
    </Layout>
  );
};

export default ContactUs;
