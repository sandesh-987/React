import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>   
    <NavLink to="localhost3000/products" style={{ marginLeft: "20px" }}> products</NavLink>
    <NavLink to="localhost3000/products/create" style={{ marginLeft: "20px" }}> Create products</NavLink></div>
  )
}

export default NavBar