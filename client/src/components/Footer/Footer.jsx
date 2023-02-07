import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"

import "./Footer.scss";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae dignissim libero. Morbi mattis felis id quam pharetra, a interdum odio laoreet. Mauris erat magna, fringilla vitae magna ut, ornare convallis nunc.
                </div>
            </div>
            <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text"> Laxmi Nagar, Delhi - 110092, India</div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">asdfgh@gmail.com</div>
            </div>
            <div className="c-item">
                < FaMobileAlt/>
                <div className="text"> 9898989898</div>
            </div>
            </div>
            <div className="col">
            <div className="title">Categories</div>
            <span className="text"> Headphone</span>
            <span className="text"> Smart Watch</span>
            <span className="text"> Bluetooth Speaker</span>
            <span className="text"> Wireless Speaker</span>
            <span className="text"> Home Theater</span>
            <span className="text"> Projectors</span>

            </div>
            <div className="col">
            <div className="title">Pages</div>
            <span className="text"> Home</span>
            <span className="text">  About</span>
            <span className="text"> Policies</span>
            <span className="text"> Return Policy</span>
            <span className="text"> Term & Conditions</span>
            <span className="text"> Contact Us</span>
            </div>
        </div>
    
    <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                @ Copyright TestStore 2023
            </div>
            <img src={Payment} alt="" />
        </div>
    </div>
    
    </footer>;
};

export default Footer;
