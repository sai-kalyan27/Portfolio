import React, { useRef } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xmah5oj",       // e.g., service_gmail
        "template_2m5ndrg",      // e.g., template_portfolio
        formRef.current,
        "fmPU8WgbOg8YBDMqw"        // e.g., VXY123456abcdef
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="contactContainer" id="contact">
      <h2>Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
