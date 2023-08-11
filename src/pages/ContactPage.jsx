import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { checkForm, submitForm, clearForm } from "../firebase/contactWithRealtimeDB";
import { checkFormFireStore, clearFormFirestore, submitFormWithAuth } from "../firebase/contactWithFirestoreDB";
import { auth } from "../firebase/firebase";

const ContactPage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMesssage] = useState(null);
  const user = auth.currentUser;

  const handleClear = () => {
    clearFormFirestore(user?.uid);
  };

  const handleCheck = () => {
    checkFormFireStore();
  }

  const handleSubmit = () => {
    if (!name || !email) {
      console.log("Name & Email are required!");
      return;
    }
    // submitForm(name, email, message);
    submitFormWithAuth(name, email, message, user?.email, user?.uid);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Password"
                  placeholder="Enter your message"
                  onChange={(e) => setMesssage(e.target.value)}
                />
              </div>
              <div className="text-center">
                {/* <button
                  className="my-2 px-4 btn btn-dark mr-1"
                  type="button"
                  onClick={clearForm}
                >
                  ClearRealtimeDB
                </button> */}
                {/* <button
                  className="my-2 px-4 btn btn-dark mr-1"
                  type="button"
                  onClick={checkForm}
                >
                  CheckRealtimeDB
                </button> */}
                <button
                  className="my-2 px-4 btn btn-dark mr-1"
                  type="button"
                  onClick={checkForm}
                >
                  Check
                </button>
                <button
                  className="my-2 px-4 btn btn-dark mr-1"
                  type="button"
                  onClick={handleSubmit}
                >
                  Send
                </button>
                <button
                  className="my-2 px-4 btn btn-dark"
                  type="button"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
