import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/NavBar.css'
/* import M from 'materialize-css' */
import logo from '../images/logo.png'


const NavBar = ({too})=> {

/* 
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems,{edge:'left'});
    });
 */
    return (
        <section className="fnavbar">
            
            <div className="navbar center">
                <NavLink to={too} className="brand-logo center"><img className="nav__logo" src={logo} alt="logo"/></NavLink>         
            </div>               
        
        </section>
        
    )
}


export default NavBar