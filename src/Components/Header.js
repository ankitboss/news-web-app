import React from "react";
import "./Styles/Header.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Header() {
  return (
    <div className="header">
      <div className="column logo">
        <img
          src="https://logoeps.com/wp-content/uploads/2014/05/21601-news-logo-icon-vector-icon-vector-eps.png"
          alt="logo"
        ></img>
      </div>
      <div className="column channel__name">
        <h2 className="ch__name__title">The Ultimate Channel</h2>
        <span className="ch__name__subtitle">
          <p>
            Are <strong>YOU</strong> know?
          </p>
          <p>What's going on behind you!</p>
        </span>
      </div>
      <div className="column social__sites">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}
