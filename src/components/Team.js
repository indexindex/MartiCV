const Team = () => {
  return (
    <div className="section team" id="section-team">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Our Team</div>
        </div>
        {/* team items */}
        <div className="team-items">
          <div className="team-col">
            <div className="team-item content-box">
              <div className="image">
                <img src="images/marti.jpg" alt="" />
              </div>
              <div className="desc">
                <div className="name">Marti Suvorov</div>
                <div className="category">Content Creator</div>
                <div className="soc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/martisuvorov.photography/"
                  >
                    <span className="icon fab fa-instagram" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/marti.suvorov.73"
                  >
                    <span className="icon fab fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team-col">
            <div className="team-item content-box">
              <div className="image">
                <img src="images/andri.jpg" alt="" />
              </div>
              <div className="desc">
                <div className="name">Andri Suvorov</div>
                <div className="category">Front-End Software Developer</div>
                <div className="soc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/andri-suvorov-4a10b81a9/"
                  >
                    <span className="icon fab fa-linkedin" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/andrisuvorov/"
                  >
                    <span className="icon fab fa-instagram" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/andri.suvorov.97"
                  >
                    <span className="icon fab fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
