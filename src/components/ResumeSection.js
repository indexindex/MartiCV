const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">

              <div className="resume-item content-box active">
                <div className="date">2023 - Present</div>
                <div className="name">Social media specialist - SERESULI OÜ</div>
                <div className="text">
                  Creating content for social media to grow engagement and brand awareness.
                  <br/>
                  Filming video reels / Photography / Implementing graphic design / Utilizing the platform for target audience reach.
                </div>
              </div>

              <div className="resume-item content-box">
                <div className="date">2023 - 2024</div>
                <div className="name">Sales Consultant - Relaxationland OÜ</div>
                <div className="text">
                  Identifying and engaging prospective customers to promote and sell products.
                  <br/>
                  Analyze customer needs and present tailored solutions. Build and maintain strong client relationships.
                </div>
              </div>

              <div className="resume-item content-box">
                <div className="date">2022 - 2023</div>
                <div className="name">Shopify Developer - LedEcho Inc</div>
                <div className="text">
                  Build and Optimize e-commerce stores and apps performance using popular software with latest technology.
                  <br/>
                  Incorporating Meta to advertise products and services.
                </div>
              </div>

            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">

              <div className="resume-item content-box active">
                <div className="date">2023 - Present</div>
                <div className="name">Tallinn University</div>
                <div className="text">
                  Bachelors Degree in Public Relations and Advertising
                </div>
              </div>

              <div className="resume-item content-box">
                <div className="date">2022 - 2023</div>
                <div className="name">Marketing Course</div>
                <div className="text">
                  Coursework - Shopify, Meta, Social Media, Copywriting, Content Creation, Email Marketing, and AI.
                </div>
              </div>

              <div className="resume-item content-box">
                <div className="date">2021 - 2022</div>
                <div className="name">UGC Course</div>
                <div className="text">
                  Filming and converting raw footage to editing software, cutting, optimizing for use, color grading, adding effect and transitions.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
