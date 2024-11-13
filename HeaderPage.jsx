// HeaderPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AppStyles.css';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faReceipt, faCreditCard, faTruck, faGasPump, faShieldAlt, faCarSide } from '@fortawesome/free-solid-svg-icons';



function HeaderPage({ scrollToQuerySection }) {


    const showLoginPopup = () => {
        document.querySelector('.overlay').classList.add('visible');
    };



    return (
        <header className="header-container">
            {/* Logo Section */}
            <div className="logo">
                <Link to="/">
                    <img src="logo.png" alt="ZoneParking" className="logo-image" />
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="nav-links">
                {/* FASTag Link with HOT Tag */}
                {/* <Link to="/fasttag" className="nav-link hot-tag">
                    <span className="hot">HOT</span> PRODUCTS
                </Link> */}



                {/* Dropdown Menu for Products */}
                <div className="dropdown">
                    <Link to="/fasttag" className="nav-link">
                        <span className="hot">HOT</span> PRODUCTS <span className="dropdown-icon">▾</span>
                    </Link>
                    <div className="dropdown-content">


                        {/* Dropdown Content for Customers */}
                        <div className="dropdown-section">
                            <h4>FOR CUSTOMERS</h4>
                            <ul className="customer-list">
                                <li>
                                    <FontAwesomeIcon icon={faParking} />
                                    <Link to="/parking">BlueTooth Parking</Link>
                                    {/* <span className="description">Find and book parking near you</span> */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faReceipt} />
                                    <Link to="/BlueTooth">APP</Link>
                                    {/* <span className="description">Check real-time challans</span> */}
                                </li>


                                <li>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                    <Link to="/AppQr">GMP QR</Link>
                                    {/* <span className="description">Get Cashback on Bill Payments</span> */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                    <Link to="/GmpAI">GMP AI EXPRESSLINE</Link>
                                    {/* <span className="description">Get Cashback on Bill Payments</span> */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTruck} />
                                    <Link to="/GmpPermit">GMP Permit</Link>
                                    {/* <span className="description">Buy, activate, and recharge FASTag</span> */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTruck} />
                                    <Link to="/GmpAccess">GMP Access</Link>
                                    {/* <span className="description">Buy, activate, and recharge FASTag</span> */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faShieldAlt} />
                                    <Link to="/GmpIQPage">GMP IQ</Link>
                                    {/* <span className="description">Get zero-commission Car Insurance</span> */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCarSide} />
                                    <Link to="/valet-services">Valet Services</Link>
                                    {/* <span className="description">Trusted by Top Brands</span> */}
                                </li>
                                
                                <li>
                                    <FontAwesomeIcon icon={faShieldAlt} />
                                    <Link to="/InsuranceSection">Portel for parking</Link>
                                    {/* <span className="description">Get zero-commission Car Insurance</span> */}
                                </li>
                                
                                {/* <li>
                                    <FontAwesomeIcon icon={faGasPump} />
                                    <a href="#buy-fuel">Buy Fuel</a>
                                    <span className="description">Get 2% Cashback on Fuel Payments</span>
                                </li> */}
                            </ul>
                        </div>

                        {/* Dropdown Content for Businesses */}
                        <div className="dropdown-section">
                            <h4>FOR BUSINESSES</h4>
                            <div className="business-item">
                                <Link to="/valet-services" className="business-link">
                                    <h5>Park+ for Businesses</h5>
                                    <p>Our technology has transformed the tricky traffic movement in parking lots for various business establishments.</p>
                                    <img src="business-image.png" alt="Park+ for Businesses" className="business-image" />
                                </Link>
                            </div>

                            {/* <div className="business-item">
                                <Link to="/BusinessSection" className="business-link">
                                    <h5>EV Charging Solution</h5>
                                    <p>Proactively formulate global niche markets whereas maintainable innovation. Progressively.</p>
                                    <img src="business-image.png" alt="EV for Businesses" className="business-image" />
                                </Link>
                            </div> */}

                        </div>
                    </div>
                </div>




                {/* Company Link */}
                <Link to="/company" className="nav-link">
                    Company
                </Link>
                {/* Careers Link */}
                <nav>
                    <Link to="/careers" className="nav-link">Careers</Link>
                </nav>

                {/* Get in Touch Link with Scroll Function */}
                <a
                    href="#contact"
                    className="nav-link highlight"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToQuerySection();
                    }}
                >
                    Get in Touch 👋
                </a>

                {/* Login Link */}
                <a
                    href="#login"
                    className="nav-link login-button"
                    onClick={(e) => {
                        e.preventDefault();
                        showLoginPopup();
                    }}
                >
                    Login
                </a>
            </nav>
        </header>
    );
}

export default HeaderPage;
