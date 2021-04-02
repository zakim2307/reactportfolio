import React, { useEffect } from "react";
import Work from "./Work";
import ImageCarousel from "./ImageCarousel";
import Expertise from "./Expertise";
import natto from "./natto.png";
import Testimonials from "./Testimonials";
import Progress from "./Progress";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home">
      <div class="slider-area position-relative">
        <div class="single-slider slider-css d-flex align-items-center">
          <div class="container">
            <div class="row align-item-center">
              <div class="col-lg-4 col-md-6 col-sm-12 col-xm-12">
                <img src={natto} className="img-fluid log-home" alt="logo" />
                <h1>
                  Zaki Mulla
                  <br />
                </h1>
                <h2>Software Developer</h2>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12 col-xm-12">
                <div data-aos="fade-up" data-aos-duration="1000" class="main">
                  <div class="border">
                    <div class="inner-cutout">
                      <h1 class="knockout">
                        “Software undergoes beta testing shortly before it’s
                        released. Beta is Latin for ‘still doesn’t work.’”
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <div class="row info-mail-no">
                <div class="col-xl-4 col-md-6 col-sm-12 text-message">
                  <div data-aos="zoom-in-down" class="white-text">
                    <i class="fa fa-laptop"></i>

                    <br />
                    <span class="mb-3">Design For</span>
                    <h5>WEB And Mobile</h5>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 phone-no">
                  <div data-aos="zoom-in-down" class="white-text">
                    <i class="fa fa-phone"></i>
                    <br />
                    <span class="mb-3">Contact Me:</span>
                    <h5>+91 7406828173</h5>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 email">
                  <div data-aos="zoom-in-down" class="white-text">
                    <i class="fa fa-envelope"></i>
                    <br />
                    <span class="mb-3">email me @</span>
                    <h5>zakim2307@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <Expertise />
        <div class="row mt-5">
          <div data-aos="fade-up-left" class="col-lg-12 col-sm-12 hobbies">
            <h3>Interests</h3>
          </div>
          <Work name="tech" text="Technology"></Work>
          <Work name="health" text="Health and Fitness"></Work>
          <Work name="gadget" text="Gadgets"></Work>
          <Work name="Muchmore" text="much more"></Work>
        </div>
        <div className="row">
          <div
            data-aos="fade-left"
            className="col-lg-4 col-md-12 col-sm-12 mt-4 mb-4"
          >
            <h1>My Progress</h1>
            <p>Constant Learning Which never ends</p>
            <i class="fa fa-laptop mt-4 mb-4"></i>
          </div>
          <div className="col-lg-8 col-md-10 col-sm-12">
            <Progress title="UI/UX Design" value="40" />
            <Progress title="Javascript" value="50" />
            <Progress title="Python" value="50" />
            <Progress title="Linux OS" value="60" />
          </div>
          <ImageCarousel />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default Home;
