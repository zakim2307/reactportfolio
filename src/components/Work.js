import React, { Fragment } from "react";

function Work(props) {
  return (
    <Fragment>
      <div class="col-lg-6 col-sm-12 col-xl-6 mb-5">
        <div data-aos="fade-right" class="box snake mb-30">
          <div class={`gallery-img small-img ${props.name}`}></div>
          <div class="overlay">
            <div class="overlay-content">
              <a href="/" class="img-pop-up">
                {props.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Work;
