import React from "react";
import stuff from "./stuffs1.jpg";
import stuff2 from "./stuffs2.jpg";
import stuff3 from "./stuffs3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./testim.css";
import logo from "./logo.svg";

export default function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <div>
        <img src={stuff2} alt="hello" />
        <div className="myCarousel">
          <h3>Siddique Khatib</h3>
          <h4>SEO Team Lead</h4>
          <p>
            It's really reassuring when this guy code's because you don't have
            to worry about the SEO and all the online marketing stuff.
          </p>
        </div>
      </div>

      <div>
        <img src={stuff} alt="hello" />
        <div className="myCarousel">
          <h3>Daniel Keystone</h3>
          <h4>Designer</h4>
          <p>
            The simple and intuitive design makes it easy for me use. Really
            love the designs that he makes really commendeble.
          </p>
        </div>
      </div>

      <div>
        <img src={stuff3} alt="hello" />
        <div className="myCarousel">
          <h3>Noushad Banu</h3>
          <h4>Designer</h4>
          <p>
            I enjoy catching up with Fetch on my laptop, or on my phone when I'm
            on the go!
          </p>
        </div>
      </div>
    </Carousel>
  );
}
