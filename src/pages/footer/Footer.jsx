import React from "react";
import Logo from "../../components/Logo";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const footer = () => {
  return (
    <div className="bg-[#0640C3] ">
      <footer className="footer sm:footer-horizontal text-base-content p-10 gap-20">
        <nav className="space-y-6">
          <Logo></Logo>
          <p>
            Dive into local recommendations for a truly authentic <br></br>{" "}
            experience.
          </p>
        <div>
                      <a className="link link-hover flex items-center gap-2">
            <FaWhatsapp />
            Need help? Call us
          </a>
          <a className="link link-hover">1-800-222-8888</a>
        </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Community Blog</a>
          <a className="link link-hover">Jobs & Careers</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Our Awards</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Tour Guide</a>
          <a className="link link-hover">Tour Booking</a>
          <a className="link link-hover">Hotel Booking</a>
          <a className="link link-hover">Ticket Booking</a>
          <a className="link link-hover">Rental Services</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item rounded-4xl relative bg-amber-50 text-black"
              />
              <button className="btn btn-primary join-item bg-[#FAB326] rounded-4xl relative -ml-10">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr className="mx-10"/>
      <div className="flex justify-between p-5 mt-6">
        <p>© 2024 Travila Inc. All rights reserved.</p>
        <div className="flex gap-2 items-center">
            <p>Follow Us</p>
            <Link><CiInstagram /></Link>
            <Link><FaFacebookSquare /></Link>
            <Link><FaSquareXTwitter /></Link>
            <Link><IoLogoYoutube /></Link>
        </div>
      </div>
    </div>
  );
};

export default footer;
