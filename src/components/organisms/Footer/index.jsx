import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white">
      <div className="container-fluid">
        <div className="row mt-5 pt-4 border-top">
          <div className="col-md-6 col-lg-8">
            <p className="copyright">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-right">
            <p className="made-with-love">
              Made with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
              <a
                href="https://cnayanajith.com"
                target="_blank"
                rel="noreferrer"
              >
                Chamikara Nayanajith
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
