import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        {/* About Section */}
                        <div className="col-lg-3 footer_column">
                            <h4 className="footer_title">NOVASCOTIAALE</h4>
                            <p className="footer_about_text">
                                NovaScotia Ale connects newcomers and locals to find housing,
                                jobs, and rides. Stay updated with community tips and resources.
                            </p>
                            <div className="footer_social_list">
                                <i className="fab fa-pinterest"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-dribbble"></i>
                                <i className="fab fa-behance"></i>
                            </div>
                        </div>

                        {/* Blog Posts */}
                        <div className="col-lg-3 footer_column">
                            <h5 className="footer_title">BLOG POSTS</h5>
                            <p className="footer_link">Travel with us this year</p>
                            <p className="footer_link">New destinations for you</p>
                            <p className="footer_link">Travel with us this year</p>
                        </div>

                        {/* Tags */}
                        <div className="col-lg-3 footer_column">
                            <h5 className="footer_title">TAGS</h5>
                            <div className="footer_tags">
                                <span>design</span>
                                <span>fashion</span>
                                <span>music</span>
                                <span>video</span>
                                <span>party</span>
                                <span>photography</span>
                                <span>adventure</span>
                                <span>travel</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-3 footer_column">
                            <h5 className="footer_title">contact info</h5>
                            <div className="contact_item">
                                <i className="fas fa-map-marker-alt contact_icon"></i>
                                <span>Halifax, Nova Scotia</span>
                            </div>

                            <div className="contact_item">
                                <i className="fas fa-envelope contact_icon"></i>
                                <span>novascotiaale@gmail.com</span>
                            </div>

                            <div className="contact_item">
                                <i className="fas fa-phone contact_icon"></i>
                                <span>+1 902 123 4567</span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            {/* Yellow Bottom Bar */}
            <div className="copyright_bar">
                <div className="container d-flex justify-content-between">
                    <span>
                        Copyright © All rights reserved | This template is made with ❤️ by CodeZypher
                    </span>
                    <div className="footer_nav">
                        <span>HOME</span>
                        <span>ABOUT US</span>
                        <span>OFFERS</span>
                        <span>NEWS</span>
                        <span>CONTACT</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;