import React, { useState } from "react"
import "./header.css"
import logo from "../pic/usha.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>Education</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1n08CnmdFxXLCmL_UfOIbV2PHHJhcYUln/view?usp=sharing" className="home-btn">DOWNLOAD RESUME</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header