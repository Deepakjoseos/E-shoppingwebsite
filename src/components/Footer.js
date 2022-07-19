import React from "react";
import "./product.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 col mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              TREND Collections
            </h5>
            <p>
              a fashion and lifestyle brand, is Reliance Retail's digital
              commerce initiative and is the ultimate fashion destination for
              styles that are handpicked, on trend and at prices that are the
              best you'll find anywhere.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <a href="#" className="text-white">
                Men's Clothes
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Women's Clothes
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Jewelery
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Electronics
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              SocialMedia Links
            </h5>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-facebook mr-3"></i>FaceBook
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-twitter mr-3"></i>Twitter
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-instagram mr-3"></i>Instagram
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-linkedin mr-3"></i>Linkedin
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-youtube mr-3"></i>Youtube
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact us
            </h5>
            <p>
              <i class="fa fa-home mr-3"></i>Trends,New Delhi
            </p>
            <p>
              <i class="fa fa-envelope mr-3"></i> Trends@info.co.in
            </p>
            <p>
              <i class="fa fa-phone mr-3"></i>+123456789
            </p>
            <p>
              <i class="fa fa-print mr-3"></i>+085578888
            </p>
          </div>
          <div>
            <hr className="mb-4" />
            <div className="row-align-items-center">
              <div className="col md 7  col lg  8">
                <p> Copyright @2022 All rights reserved by:</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong className="text-warning">TRENDS</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
