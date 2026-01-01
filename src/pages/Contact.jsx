import React, { useState } from 'react';
import FadeIn from '../components/Fadein';
import '../style/contact.scss';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {   // <-- replace with your backend route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  return (
    <main className="main-box">
      <div className="content-box">
        <h2 className="heading">Contact Us</h2>
        <div className="contact">
          <FadeIn>
            <form onSubmit={handleSubmit} className="contact-left">
              <div className="contact-box">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </FadeIn>

          <FadeIn>
            <div className="contact-right">
              <div className="contact-box">
                <h2 className="heading2">Get in touch</h2>
                <p className='left-heading'>
                  <h5>Email to me</h5>
                  <a href='mailto:nnitinmn@gmail.com' className="description">
                    nnitinmn@gmail.com
                  </a>
                </p>
                <p className='left-heading'>
                  <h5>Email to me</h5>
                  <a href='mailto:nnitinmn@gmail.com' className="description">
                    nnitinmn@gmail.com
                  </a>
                </p>
                <p className='left-heading'>
                  <h5>Connect to me</h5>
                  <Link to="#">Youtube</Link>
                  <Link to="#">Twitter</Link>
                  <Link to="#">Instagram</Link>
                  <Link to="#">LinkedIn</Link>
                </p>



              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="content-box">
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p>
      </div>
    </main>
  );
};

export default Contact;