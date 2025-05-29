import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [phoneHover, setPhoneHover] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleMailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hello@zerocac.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("+911234567890");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 1500);
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo-container">
          <img
            src="https://www.zerocac.com/_next/image?url=%2FZerocac_white_transpbg.png&w=1920&q=75"
            alt="Zerocac Logo"
            className="footer-full-img"
          />
        </div>

        <hr className="footer-line-full" />

        <div className="footer-bottom">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/zerocac.insights/"
              target="_blank"
              className="icon-circle"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/zerocac/"
              target="_blank"
              className="icon-circle"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="mailto:hello@zerocac.com"
              aria-label="Email"
              className={`icon-circle mail-icon-circle${copied ? " expanded" : ""}`}
              onClick={handleMailClick}
            >
              {copied && <span className="copy-inline">Copied&nbsp;</span>}
              <FaEnvelope className="icon" />
            </a>
            <a
              aria-label="Phone"
              className={`icon-circle phone-icon-circle${(phoneHover || phoneCopied) ? " expanded" : ""}`}
              onMouseEnter={() => setPhoneHover(true)}
              onMouseLeave={() => setPhoneHover(false)}
              onClick={handlePhoneClick}
            >
              {(phoneHover || phoneCopied) && (
                <span className="copy-inline">
                  {phoneCopied ? "Copied" : "Copy"}&nbsp;
                </span>
              )}
              <FaPhone className="icon" />
            </a>
          </div>

          <ul className="nav-links">
            <li><a href="https://www.zerocac.com/services/B2B" target="_blank">Services</a></li>
            <li><a href="https://www.zerocac.com/blogs" target="blank">Blogs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;