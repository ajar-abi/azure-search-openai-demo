import React from "react";
import Logo from "../assets/logo.png";
import BarsIcon from "../assets/bars-solid.svg";
import SearchIcon from "../assets/magnifying-glass-solid.svg";
import MailIcon from "../assets/mail.svg";
import NotificationsIcon from "../assets/notifications.svg";
import USFlagIcon from "../assets/united-states-of-america.svg";
import ChevronIcon from "../assets/circle-chevron-down.svg";
import { Image } from "@themesberg/react-bootstrap";
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="nav" style={{display:"flex"}}>
      <div className="nav__left">
        {/* <Image src="" className="nav__left--logo" /> */}
        <Image src={BarsIcon} className="nav__left--bars" />
        <div className="nav__left--searchbox">
          <input
            type="search"
            className="nav__left--search"
            placeholder="Search..."
          />
          <Image src={SearchIcon} className="nav__left--searchicon" />
        </div>
      </div>
      <div className="nav__right">
        <Image src={MailIcon} className="nav__right--icon" />
        <div className="nav__right--notification">
          <Image src={NotificationsIcon} className="nav__right--icon" />
          <span className="nav__right--notifynum">4</span>
        </div>
        <Image src={USFlagIcon} className="nav__right--flag" />
        <p className="nav__right--logname">
          <span className="nav__right--welcome">Hello, </span>Vidhya C
        </p>
        <Image src={ChevronIcon} className="nav__right--chevron" />
      </div>
    </div>
  );
};

export default Navbar;
