import React from "react";
import SliderContact from "./SliderContact";
import ImageCarousel from "./ImageCarousel";
import abimg from "./about.png";
import Progress from "./Progress";

function About() {
  return (
    <div className="about">
      <SliderContact />
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={abimg} alt="" />
          </div>
          <div class="col-lg-5">
            <div class="back-div-tra"></div>
            <h1 class="font-weight-light">About Me</h1>
            <p>
              My Name is Zaki Mulla Mulla and i am a software developer
              <br />
              I am bachelor in Computer Application from Bharatesh BCA. Tech
              enthusiast, gadget geek and much more.
              <br />
              I have learnt many programming languages from C to Python as well
              as web development .<br />
              And I always look forward to learn new things.
            </p>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default About;
