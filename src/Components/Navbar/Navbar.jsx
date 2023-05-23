import React, { useState } from 'react'
import "./Navbar.scss"
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [active , setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    const removeNav = () => {
        setActive('navBar ')
    }
  return (
     <section className="navBarSection">
        <header className="header flex">
            <div className="logoDiv">
                <div className="logo flex">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                </div>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                    <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li className="navItem">
                    <Link to="/about" className="navLink">About Us</Link>
                    </li>
                    <li className="navItem">
                    <Link to="/graph" className="navLink">Charts</Link>
                    </li>
                    <li className="navItem">
                    <Link to="/map" className="navLink">Map</Link>
                    </li>
                </ul>
                <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon' />
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
                 <TbGridDots className='icon'/>
            </div>
        </header>
     </section>
  )
}
