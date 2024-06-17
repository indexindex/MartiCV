const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-heart" />
              </div>
              <div className="name">Fitness</div>
              <div className="text">
                Showing up in the gym everyday has taught me dicipline and formed healthy habits.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-walking" />
              </div>
              <div className="name">Relax</div>
              <div className="text">
                After long days of sitting behind a screen, I love getting outside or go for forest walks.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-chess-knight" />
              </div>
              <div className="name">Chess</div>
              <div className="text">
                I belive chess is the greatest mind game. During breaks I love to play chess.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-book" />
              </div>
              <div className="name">Reading</div>
              <div className="text">
                Reading psyhology and strategy books have helped me understand ideas, that were true but difficult to say.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
