import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-gallery")}`}
              onClick={handleFilterKeyChange("f-gallery")}
              data-text="Gallery"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-gallery" />
              Gallery
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Video
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-gallery">
          <div className="image">
            <a href="#gallery-1" className="has-popup-gallery hover-animated">
              <img src="images/projects/p1/p1-brendance.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">&quot;Brendance&quot; Concert</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-1" className="mfp-hide">
              <a href="images/projects/p1/p1-image-1.jpg" />
              <a href="images/projects/p1/p1-image-2.jpg" />
              <a href="images/projects/p1/p1-image-3.jpg" />
              <a href="images/projects/p1/p1-image-4.jpg" />
              <a href="images/projects/p1/p1-image-5.jpg" />
              <a href="images/projects/p1/p1-image-6.jpg" />
              <a href="images/projects/p1/p1-image-7.jpg" />
              <a href="images/projects/p1/p1-image-8.jpg" />
              <a href="images/projects/p1/p1-image-9.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-gallery">
          <div className="image">
            <a href="#gallery-2" className="has-popup-gallery hover-animated">
              <img src="images/projects/p2/p2-jagala-joa.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">Shot at &quot;Jägala Joa&quot;</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-2" className="mfp-hide">
              <a href="images/projects/p2/p2-image-1.jpg" />
              <a href="images/projects/p2/p2-image-2.jpg" />
              <a href="images/projects/p2/p2-image-3.jpg" />
              <a href="images/projects/p2/p2-image-4.jpg" />
              <a href="images/projects/p2/p2-image-5.jpg" />
              <a href="images/projects/p2/p2-image-6.jpg" />
              <a href="images/projects/p2/p2-image-7.jpg" />
              <a href="images/projects/p2/p2-image-8.jpg" />
              <a href="images/projects/p2/p2-image-9.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-gallery">
          {" "}
          {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
          <div className="image">
            <a href="#gallery-3" className="has-popup-gallery hover-animated">
              <img src="images/projects/p3/p3-oixio.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">&quot;OIXIO&quot; Inspiration Day</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-3" className="mfp-hide">
              <a href="images/projects/p3/p3-image-1.jpg" />
              <a href="images/projects/p3/p3-image-2.jpg" />
              <a href="images/projects/p3/p3-image-3.jpg" />
              <a href="images/projects/p3/p3-image-4.jpg" />
              <a href="images/projects/p3/p3-image-5.jpg" />
              <a href="images/projects/p3/p3-image-6.jpg" />
              <a href="images/projects/p3/p3-image-7.jpg" />
              <a href="images/projects/p3/p3-image-8.jpg" />
              <a href="images/projects/p3/p3-image-9.jpg" />
              <a href="images/projects/p3/p3-image-10.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-gallery">
          {" "}
          {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
          <div className="image">
            <a href="#gallery-4" className="has-popup-gallery hover-animated">
              <img src="images/projects/p4/p4-harku-jarv.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">Shot at &quot;Harku Järv&quot;</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-4" className="mfp-hide">
              <a href="images/projects/p4/p4-image-1.jpg" />
              <a href="images/projects/p4/p4-image-2.jpg" />
              <a href="images/projects/p4/p4-image-3.jpg" />
              <a href="images/projects/p4/p4-image-4.jpg" />
              <a href="images/projects/p4/p4-image-5.jpg" />
              <a href="images/projects/p4/p4-image-6.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-video">
          <div className="image">
            <a
              href="/videos/Intro.mp4"
              target="_blank"
              className="has-popup-video hover-animated"
            >
              <img src="images/projects/p5/KOFF.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-video" />
                    <span className="desc">
                      <span className="category">Video</span>
                      <span className="name">KOFF Longero Event Video</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-gallery">
          {" "}
          {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
          <div className="image">
            <a href="#gallery-5" className="has-popup-gallery hover-animated">
              <img src="images/projects/p6/p6-rotermanni.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">Shot at &quot;Rotermanni&quot;</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-5" className="mfp-hide">
              <a href="images/projects/p6/p6-image-1.jpg" />
              <a href="images/projects/p6/p6-image-2.jpg" />
              <a href="images/projects/p6/p6-image-3.jpg" />
              <a href="images/projects/p6/p6-image-4.jpg" />
              <a href="images/projects/p6/p6-image-5.jpg" />
              <a href="images/projects/p6/p6-image-6.jpg" />
              <a href="images/projects/p6/p6-image-7.jpg" />
              <a href="images/projects/p6/p6-image-8.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;

