import React from "react";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 footer">
        <div class="container">
          <ContactForm />
          <div className="row mt-3 mb-5">
            <div class="col-lg-12 col-md-12 col-sm-12 mb-5 mt-5">
              <div class="flex-class">
                <h3>Zaki Mulla</h3>
                <h6>
                  “Software undergoes beta testing shortly before it’s released.
                  Beta is Latin for ‘still doesn’t work.’”
                </h6>
                <div class="social">
                  <i class="fab fa-instagram" />
                  <i class="fab fa-facebook" />
                  <i class="fab fa-twitter" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
