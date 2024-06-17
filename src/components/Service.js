const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <img src="/icons/lightroom.svg" width="64"/>
              </div>
              <div className="name">Lightroom Photo Editing</div>
              <div className="text">
                I'll add a modern and stylished polish to your photos, that will truly bring them to life!
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <img src="/icons/da-vinci.svg" width="64"/>
              </div>
              <div className="name">Davinci Video Production</div>
              <div className="text">
                I'll push the limits with your footage to instantly grab attention and maximize engagment.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <img src="/icons/meta.svg" width="64"/>
              </div>
              <div className="name">Advertising</div>
              <div className="text">
                I'll film a high-end advert in studio setting, create captions and format for all popular platforms.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <img src="/icons/canva.svg" width="64"/>
              </div>
              <div className="name">Graphic Design</div>
              <div className="text">
                I'll design the most memorable and unique abstracts for your brand. Logo, banners, graphics, etc.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <img src="/icons/camera.svg" width="64"/>
              </div>
              <div className="name">Photography</div>
              <div className="text">
                I'll present highest quality photography with knowledge of composition, lightning and professional gear.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <img src="/icons/film.svg" width="64"/>
              </div>
              <div className="name">Videography</div>
              <div className="text">
                I'll produce cinematic video content of your brand and use my own professional gear with knowledge in camera movement, transitions and gear.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
