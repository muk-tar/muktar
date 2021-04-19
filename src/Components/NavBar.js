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
        <div class="navbar-fixed">
                <nav className="blue-grey lighten-4">
                    <div className="nav-wrapper">
                        <NavLink to="/" className="brand-logo"><img className="nav__logo" src={logo} alt="logo"/></NavLink>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/explore">Explore</NavLink></li>
                            <li><NavLink to="/steel">Steel</NavLink></li>
                            <li><NavLink to="/aerospace">Aerospace</NavLink></li>
                            <li><NavLink to="/network">Network</NavLink></li>
                            <li><NavLink to="/infrastructure">Infra</NavLink></li>
                            <li><NavLink to="/aviation">Aviation</NavLink></li>
                            <li><NavLink to="/skilling">Skilling</NavLink></li>
                            <li><NavLink to="/media">Media</NavLink></li>
                            <li><NavLink to="/events">Events</NavLink></li>
                            <li><NavLink to="/affiliates">Affiliates</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </nav>

                </div>
                
                <ul className="sidenav" id="mobile-demo">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/explore">Explore</NavLink></li>
                    <li><NavLink to="/steel">Steel</NavLink></li>
                    <li><NavLink to="/aerospace">Aerospace</NavLink></li>
                    <li><NavLink to="/network">Network</NavLink></li>
                    <li><NavLink to="/infrastructure">Infra</NavLink></li>
                    <li><NavLink to="/aviation">Aviation</NavLink></li>
                    <li><NavLink to="/skilling">Skilling</NavLink></li>
                    <li><NavLink to="/media">Media</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/affiliates">Affiliates</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
            
                </ul>

        </section>
        
    )
}


export default NavBar