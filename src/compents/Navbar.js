import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <div className='NavigationBar'>
      <div className='logo'>
        <Link to="/">
      <img className="ImageLogo" src="/image/sal.jpg" alt=""></img></Link>
      </div>
      <div className='inp'> 
       <input type="text"
       onChange={(e)=>props.setText(e.target.value)}
       placheloder="Rechercher">
       </input>
       <div className='log'>
        <h3>HOME</h3>
        <h3><Link to="/about">ABOUT</Link></h3>
        <h3>MOVIES</h3>
        <h3>SERIES</h3>
         </div>      
         </div>
          </div>
  )
}

export default Navbar