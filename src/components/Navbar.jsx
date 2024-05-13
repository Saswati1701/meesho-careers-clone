import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/meesho-logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="" srcset="" height="72px" />
      <div className='linksContainer'>
        <Link to="/" >Home</Link>
        <Link to="/tech" >Tech at Meesho</Link>
        <Link to="/life" >Life at Meesho</Link>
        <Link to="/blog" >Blog</Link>
        <Link to="/newsroom" >Newsroom</Link>
        <Link to="/jobs">JOIN US</Link>
      </div>
    </div>
  )
}

export default Navbar