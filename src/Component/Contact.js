// import Foot from './Foot';
import "./Contact.css"
// import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm("")
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  return (
    <>
      <div>
        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">

              <h2>Contact</h2>
              <p>Thetavega Team</p>
            </div>

            <div className="row">

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <h4> <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:</h4>
                    <p>Block No. 02, Sadafuli Apt, opp. Ganesh Mandir, Rana Nagar, Aurangabad, Maharashtra 431001</p>
                  </div>

                  <div className="email">
                    <h4><FontAwesomeIcon icon={faEnvelope} /> Email:</h4>
                    <p>info@thetavega.tech</p>
                  </div>

                  <div className="phone">
                    <h4> <FontAwesomeIcon icon={faPhone} /> Call:</h4>
                    <p>+91 9175109978</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15008.914326699822!2d75.3546705!3d19.8725676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x288db97cca822a00!2sTHETAVEGA%20TECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1676633012359!5m2!1sen!2sin"
                    frameBorder={0}
                    style={{ border: 0, width: '100%', height: '290px' }}
                    allowFullScreen
                  />
                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center">
                    <button type='submit' className='btn btn-primary' onClick={() => window.alert("Email has send")}>
                      Send message
                    </button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </div>

    </>
  )
}

export default Contact;
