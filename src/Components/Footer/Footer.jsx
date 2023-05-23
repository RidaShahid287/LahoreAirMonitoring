import React, {useEffect} from 'react'
import "./Footer.scss"
import video2 from '../../Assets/beach.mp4'
import { Link } from "react-router-dom";
import logo from '../../Assets/logo.png'
import {AiFillMail} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
      <video src={video2} muted autoPlay loop  type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="footerCard flex">
          <div className="footerIntro flex">
          <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Lahore Air Monitoring</h2>
          </div>
        </div>
            <div className="logoDiv">
            <div className="logo flex">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                </div>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
            We tackle pressing scientific problems related to the Earth and its environment!
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiFillMail className='icon'  /> <span >rsa@itu.edu.pk</span> <br></br>
              <HiLocationMarker className='icon'  /> <span>346-B, Ferozepur Road, Lahore, Punjab 54700 </span>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>Best Air Monitoring Website</small>
            <small>© Copyright Reserved - ZorexTech 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}
