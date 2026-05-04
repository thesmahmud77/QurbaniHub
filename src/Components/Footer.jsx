import React from "react";
import MyContainer from "../Custom-Hooks/MyContainer";

const Footer = () => {
  return (
    <MyContainer>
      <div className="flex items-center justify-center gap-80 py-2">
        <div className="flex flex-col items-start justify-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </MyContainer>
  );
};

export default Footer;
