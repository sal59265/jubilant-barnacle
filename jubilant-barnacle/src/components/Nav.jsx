import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <h4 className='title'>Jubilant Barnacle</h4>
      <div className='navDiv'>
        <Link to="/">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Nav;