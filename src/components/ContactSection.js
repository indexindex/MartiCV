import { Fragment, useState } from "react";
import { useAppContext } from '../context';

const ContactSection = () => {
  const { state, dispatch } = useAppContext();
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senderEmail, subject, message }),
      });

      const result = await res.json();
      setResponse(result);

      
      if (result.success) {
        setSenderEmail('');
        setSubject('');
        setMessage('');
        dispatch({ type: 'SET_PLAN', payload: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResponse({ success: false, message: 'Failed to send email' });
    }
  };

  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text">
                  <a href="tel:+37253400432">
                  +372 5340 0432
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="#section-contacts">
                  marti.fotograaf@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">Address</div>
                <div className="text">Estonia, Tallinn</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Freelance Available</div>
                <div className="text">I am available for Freelance hire</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          <div className="title">
            <div className="title_inner">Contacts Form</div>
          </div>
          <div className="content-box">
            {response && (
              <div className={`alert-${response.success ? 'success' : 'error'}`}>
                <p>{response.message}</p>
              </div>
            )}
          </div>
          <div className="contact_form content-box">
            <form id="cform" method="post" onSubmit={handleSubmit}>
              <div className="group-val">
                <input
                  type="email"
                  name="senderEmail"
                  placeholder="Your Email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  required
                />
              </div>
              <div className="group-val">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="group-val ct-gr">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={state.selectedPlan ? `Selected Plan: ${state.selectedPlan}` : message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="group-bts">
                <button type="submit" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactSection;