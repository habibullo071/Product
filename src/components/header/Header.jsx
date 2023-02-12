import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='Header'>
      <div className="nav">
        <h1 className='h1'>
          Product
        </h1>
        <ul className='ul'>
          <li className='li'>
            Produck
          </li>
          <li className='li'>
            Produck
          </li>
          <li className='li'>
            Produck
          </li>
          <li className='li'>
            Produck
          </li>
        </ul>
        <button className='But'>sign in</button>
        <button className='but'>sign un</button>
      </div>
      <div className="hero">
        <div className="containr">
          <h1 className='h'>
            Work  at the speed <br />
            of thought
          </h1>
          <div className="p">
            Tools, tutorials, design and innovation experts, all <br /> in one place! The most
            intuitive way to imagine <br /> your next user experience.
          </div>
        </div>
        <button className='get'>Get started</button>
        <button className='watch'>Watch the video</button>
      </div>
      <div className="main">
        <h2 className='h2'>
          Product  was Built Specifically <br />
          for You
        </h2>
        <ul className='l'> 
          <li className='c'>
            <h4 className='h4'>
              First click tests
            </h4>
            <h6 className='k'>
              While most people enjoy casino gambling,
            </h6>
          </li>
          <li className='c'>
            <h4 className='h4'>
              First click tests
            </h4>
            <h6 className='k'>
              While most people enjoy casino gambling,
            </h6>
          </li>
          <li className='c'>
            <h4 className='h4'>
              First click tests
            </h4>
            <h6 className='k'>
              While most people enjoy casino gambling,
            </h6>
          </li>
          <li className='c'>
            <h4 className='h4'>
              First click tests
            </h4>
            <h6 className='k'>
              While most people enjoy casino gambling,
            </h6>
          </li>
        </ul>
        <button className='btn'>SIGN UP NOW</button>
      </div>
    </div>
  )
}

export default Header