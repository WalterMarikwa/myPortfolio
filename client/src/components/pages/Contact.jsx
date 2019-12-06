import React from "react";
import "../styles/Contact.css";


export default class Contact extends React.Component {
state = {
  name : null,
  // email : null,
  // phone : "",
  // message : ""
}

handleSubmit = event => {
  event.preventDefault()
}

handleInputChange = event => {
  event.preventDefault()
  // console.log(event.target.name)
  // console.log(event.target.value)
  this.setState({
    [event.target.name]: event.target.value
    
  })
}


  render() {
    const {name} = this.state
    return (
      <div className="body_container">
      <div className="contact-form">
        <div className="container">
          <form id="contact" method="post" action="/api/newContact" onSubmit={this.handleSubmit} >
            <h3>Contact Form</h3>
            <h4 style={{ color: "orangered" }}>Hey Lets Work Together!</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabIndex={1}
                required
                autoFocus
                value = {name}
                onChange={this.handleInputChange}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex={2}
                required
                // value = {email}
                onChange={this.handleInputChange}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number"
                type="tel"
                tabIndex={3}
                required
                // value = {phone}
                // onChange={this.handleInputChange}
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabIndex={5}
                required
                // value = {message}
                // onChange={this.handleInputChange}
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                onClick={this.handleSubmit}
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