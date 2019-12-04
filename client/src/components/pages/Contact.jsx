import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="body_container">
      <div className="contact-form">
        <div className="container">
          <form id="contact" action="mailto:waltermarikwa02@gmail.com">
            <h3>Contact Form</h3>
            <h4 style={{ color: "orangered" }}>Hey Lets Work Together!</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabIndex={1}
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex={2}
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number"
                type="tel"
                tabIndex={3}
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabIndex={5}
                required
                defaultValue={""}
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
            </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;


