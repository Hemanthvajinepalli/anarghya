import React, { useState } from "react";
import Navbar from "./Navbar";

function Contactus() {
  const [username, setUsername] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setTextarea] = useState("");

  function submit() {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(username)) {
      alert("Name must only contain letters and spaces");
      document.getElementById("name").style.borderColor = "red";
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailid)) {
      alert("Enter a valid email address");
      document.getElementById("email").style.borderColor = "red";
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(mobile)) {
      alert("Enter a 10-digit contact number");
      document.getElementById("subject").style.borderColor = "red";
      return;
    }

    if (message === "") {
      alert("Message cannot be empty");
      document.getElementById("email_body").style.borderColor = "red";
      return;
    }

    // If everything is valid
    alert("Message sent successfully");
    document.getElementById("authentication").innerHTML = "Message sent successfully";
    document.getElementById("authentication").style.color = "green";
    document.getElementById("authentication").style.fontSize = "20px";
    document.getElementById("subject").style.borderColor = "green";
    document.getElementById("email_body").style.borderColor = "green";
    document.getElementById("email").style.borderColor = "green";
    document.getElementById("name").style.borderColor = "green";
  }

  return (
    <>
      <Navbar />
      <div className="container bg-body-secondary mt-5 pb-2 rounded">
        <div className="row">
          <div className="col align-self-center">
            <h1 className="text-center">Send us a message</h1>

            {/* Name */}
            <div className="form-group p-2">
              <label htmlFor="name" className="fw-bold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="form-group p-2">
              <label htmlFor="email" className="fw-bold">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={emailid}
                onChange={(e) => setEmailid(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="form-group p-2">
              <label htmlFor="subject" className="fw-bold">Phone No</label>
              <input
                type="tel"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Enter the Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="form-group p-2">
              <label htmlFor="email_body" className="fw-bold">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
                value={message}
                onChange={(e) => setTextarea(e.target.value)}
              ></textarea>
            </div>

            <span id="authentication"></span>
            <div className="mx-auto text-center mt-3">
              <button
                onClick={submit}
                className="btn btn-primary ps-4 pe-4 mt-2 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
