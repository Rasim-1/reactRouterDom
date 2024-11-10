import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <header className="header">
    <div className="container">
        <nav className="nav">
           <Link to={'/'}>home</Link>
           <Link to={'/about'}>about</Link>
           <Link to={'/contact'}>contact</Link>

        </nav>
    </div>
   </header>
   
   
   
   </>
  )
}

export default Header