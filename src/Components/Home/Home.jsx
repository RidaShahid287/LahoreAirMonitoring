import React, { useEffect, useState } from "react";
import "./Home.scss";
import video from "../../Assets/boat.mp4";
import { AiFillMail } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Mailto({ email, subject, body, children }) {
  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
    >
      {children}
    </a>
  );
}

export default Mailto;
export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Pakistan
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Air Monitoring In Lahore.
          </h1>
          <br></br>
          <Link to="/about"> 
          <p data-aos="fade-up" class="inner">
            <a href="javascript: void 0;" class="button">
              <span class="border"></span>
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
              <span class="text">About Us</span>
            </a>
          </p>
          </Link>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <Link to="http://rsa.itu.edu.pk/">
              {" "}
              <BsBrowserChrome className="icon" />
            </Link>
            <Mailto
              email=" rsa@itu.edu.pk"
              subject="Hello"
              body="I want to contact you"
            >
               <AiFillMail className="icon" />
            </Mailto>
          </div>
        </div>
      </div>
    </section>
  );
};
