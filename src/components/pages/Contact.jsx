import React from "react";
import "../styles/Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="body_container">
      <div className="contact-form">
        <div className="container">
          <form action="https://formspree.io/waltermarikwa02@gmail.com" method="post" id="contact" >
            <h3>Contact Form</h3>
            <h4 style={{ color: "orangered" }}>Hey Lets Work Together!</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                name="name"
                tabIndex={1}
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                name="email"
                tabIndex={2}
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number"
                type="tel"
                name="number"
                tabIndex={3}
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                name="subject"
                tabIndex={5}
                required
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                value="Send Message"
              >
                Submit
            </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    )
  }
}
