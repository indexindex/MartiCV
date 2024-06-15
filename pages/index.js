import { useEffect } from "react";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Index = () => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax-video"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);

  return (
    <Layout>
      <div className="section started" id="section-started">
        {/* background */}
        <div
          id="started-video-bg"
          className="video-bg media-bg jarallax-video video-mobile-bg"
          data-jarallax-video="mp4:./videos/Intro.mp4"
          data-mobile-preview="images/started_image_p.jpg"
          data-volume={100}
        >
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, I’m <strong>Marti Suvorov</strong>, specializing in content creation and{" "}
                <br />
                social media managment. Based in Tallinn, Estonia.
              </h1>
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;