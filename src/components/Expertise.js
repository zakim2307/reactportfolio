import React, { Fragment } from "react";
export default function Expertise() {
  return (
    <Fragment>
      <h1 data-aos="slide-down">My Expertise</h1>
      <div class="row">
        <div class="col-lg-6 mb-0">
          <div data-aos="slide-up" class="card">
            <img class="card-img-top" src="" alt="" />

            <div class="card-body">
              <i class="card-ico devicon-react-original colored"></i>
              <h5 class="card-title">React.js</h5>
              <p class="card-text">One solution for all ui/ux problems</p>
              <a href="/">React home page</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-0">
          <div data-aos="slide-up" class="card">
            <img class="card-img-top" src="" alt="" />
            <div class="card-body">
              <i class="card-ico devicon-python-plain colored"></i>
              <h5 class="card-title">Python Developer</h5>
              <p class="card-text">most powerful language you can still read</p>
              <a href="/">Python home page</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div data-aos="slide-up" class="card">
            <img class="card-img-top" src="" alt="" />

            <div class="card-body">
              <i class="card-ico devicon-javascript-plain colored"></i>
              <h5 class="card-title">Javascript Developer</h5>
              <p class="card-text">
                Everything is possible when you know Javascript
              </p>
              <a href="/">Javascript Home page</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div data-aos="slide-up" class="card">
            <img class="card-img-top" src="" alt="" />

            <div class="card-body">
              <i class="card-ico devicon-ubuntu-plain colored"></i>
              <h5 class="card-title">Linux Ubuntu</h5>
              <p class="card-text">
                Virus free and secure best Operating System in whole universe.
              </p>
              <a href="/">Go to linux home page</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
