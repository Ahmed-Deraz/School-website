import React, { useState } from 'react';
import './Contact.css';
import { assets } from '../../../../assets/assets';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "61583224-c9e1-4982-bd3b-56927d62c0d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Thanks! Your message has been sent.");
      event.target.reset();
    } else {
      setResult("Oops! Something went wrong.");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <h3>Send us a message <img src={assets.msg_icon} alt="message icon" /></h3>
        <p>Feel free to reach out through the contact form or use the details below. We’re always happy to hear from you.</p>
        <ul>
          <li><img src={assets.mail_icon} alt="Email" />elqudsschool@yahoo.com</li>
          <li><img src={assets.phone_icon} alt="Phone" />03-5170548 / 5170547 / 5170549</li>
          <li><img src={assets.location_icon} alt="Location" />Moustafa Kamel St., Off 45 St. Miami, Alexandria, Egypt.</li>
        </ul>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your full name" required />
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="Your mobile number" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Your email address" required />
          <label>Message</label>
          <textarea name="message" rows="5" placeholder="Write your message..." required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
          <span className="form-result">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;