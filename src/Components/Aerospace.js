import React from 'react'
import './css/Aerospace.css'
import NavBar from './NavBar'


const Aerospace=() =>{
    return (
        <React.Fragment>
        <NavBar too="/explore"/>
        <div className="aerospace ">
        
            <div className="aerospace-container">
                <div className="aerospace-card" >
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                <h5>AEROSTRUCTURE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets.</p>
                        </div>
                    </div>
                </div>
                <div className="aerospace-card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                <h5>MRO</h5>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets</p>
                        </div>
                    </div>
                </div>
                <div className="aerospace-card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                                <h5>SALES</h5>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Aerospace;
















