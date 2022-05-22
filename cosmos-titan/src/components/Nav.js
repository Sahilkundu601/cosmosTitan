import React from 'react'
import Logo from './NavInsides/Logo.js'
import Search from './NavInsides/Search.js'
import Profile from './NavInsides/Profile.js'
import Cart from './NavInsides/Cart.js'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
        
        <Logo></Logo>
        <Search></Search>
        <Profile></Profile>
        <Cart></Cart>
    </div>
  )
}

export default Nav