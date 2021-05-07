import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/NavBar.css'
import M from 'materialize-css'
import logo from '../images/logo.png'


const NavBar = ()=> {


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems,{edge:'left'});
    });

    return (
        <section className="fnavbar">
                <nav className="white">
                    
                    <NavLink to="/" className="brand-logo"><img className="nav__logo" src={logo} alt="logo"/></NavLink>         
                   
                </nav>
        </section>
        
    )
}


export default NavBar