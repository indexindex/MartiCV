const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="/images/marti.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I&apos;m Marti Suvorov. Creative from Estonia, Tallinn. 
            I have rich experience in photo and video design, also I&apos;m good at Davinci Resolve. 
            I&apos;d love to talk about your ideas, and help you make them true.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 22
              </li>
              <li>
                <strong>Residence:</strong> Estonia
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Tallinn
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+37253400432">+372 5340 0432</a>
              </li>
              <li>
                <strong>E-mail:</strong> <a href="contacts/#section-contacts">marti.fotograaf@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="/cv.pdf" className="btn hover-animated" download>
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
