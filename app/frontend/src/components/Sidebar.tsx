import React, { useState } from "react";
import CircleIcon from "../assets/circle.svg";
import HomeIcon from "../assets/home.svg";
import MoreIcon from "../assets/more.svg";
import ChartIcon from "../assets/chart.svg";
// import ProfileImg from "../assets/profile.jpg";
import ChevronDown from "../assets/circle-chevron-down.svg";
// import { Image } from "@themesberg/react-bootstrap";
import { Image } from "@themesberg/react-bootstrap";
import "./Sidebar.css";

import { useNavigate } from "react-router-dom";
const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const [showClient, setShowClient] = useState(false);
    const [showUser, setShowUser] = useState(false);

    return (
        <div className="sidebar" style={{ width: "230px", height: "calc(100vh - 77px)" , marginTop:"5%"}}>
            <div className="sidebar__profile">
                {/* <Image src={ProfileImg} alt="profile" className="sidebar__profile--pic" /> */}
                <div className="sidebar__profile--namesec">
                    <p className="sidebar__profile--namesec-name">Vidhya C</p>
                    <p className="sidebar__profile--namesec-status">
                        <Image src={CircleIcon} className="sidebar__profile--namesec-icon" />
                        Online
                    </p>
                </div>
            </div>
            <ul className="sidebar__ul">
                <li className="sidebar__li">
                    <a
                        href="javascript:void(0)"
                        onClick={() => {
                            navigate("/dashboard/overview");
                        }}
                        className="sidebar__a"
                    >
                        <span className="sidebar__a--span">
                            <Image src={HomeIcon} className="sidebar__icons" />
                            KM Dashboard
                        </span>
                        <Image src={ChevronDown} className="sidebar__icons--chevron" />
                    </a>
                </li>
                <li className="sidebar__li">
                    <a
                        href="javascript:void(0)"
                        onClick={() => {
                            navigate("/dashboard/overview");
                        }}
                        className="sidebar__a"
                    >
                        <span className="sidebar__a--span">
                            <Image src={MoreIcon} className="sidebar__icons" />
                            KM Article
                        </span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a
                        href="javascript:void(0)"
                        onClick={() => {
                            navigate("/");
                        }}
                        className="sidebar__a"
                    >
                        <span className="sidebar__a--span">
                            <Image src={HomeIcon} className="sidebar__icons" />
                            ChatGPT
                        </span>
                        <Image src={ChevronDown} className="sidebar__icons--chevron" />
                    </a>
                </li>
            </ul>
            <div className="sidebar__links">
                <a href="#" className="sidebar__links--a">
                    About
                </a>
                <a href="#" className="sidebar__links--a">
                    Privacy & Policy
                </a>
                <a href="#" className="sidebar__links--a">
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Sidebar;