import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className='container'>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar