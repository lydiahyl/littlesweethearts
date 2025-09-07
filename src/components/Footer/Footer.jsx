import React from "react";
import "./Footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="k-footer" role="contentinfo">
      <div className="k-footer__grid">
        <div className="k-footer__left">
        </div>

        <div className="k-footer__center">
          © {currentYear} | KinderHearts Preschool | Managed by
          {" "}
          Tadika Wawasan Elit (003717356-U) | All rights reserved.
          <div className="k-note">
            All information is correct at time of upload and is subject to change.
          </div>
        </div>
      </div>
    </footer>
  );
}
