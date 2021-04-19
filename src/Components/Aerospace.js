import React from 'react'
import photo1 from '../images/aero/banner-01.jpg'
import photo2 from '../images/aero/banner-02.jpg'
import photo3 from '../images/aero/banner-03.jpg'
import {Card7,Card8} from './Card'
import './css/Aerospace.css'


export default function Aerospace() {
    return (
        <section className="aero" >
            <div className="part1" style={{background:'linear-gradient(to right bottom, #051937, #323e63, #5e6793, #8e94c6, #c0c3fb)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col s6 l4">
                            <Card8 
                            title="AEROSTRUCTURES"
                            description="Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets"
                            photo={photo1}
                            alt="img1"
                            />
                        </div>

                        <div className="col s6 l4">
                            <Card8 
                            title="MRO"
                            description="Maintenance, repair and overhaul (MRO) of commercial airliners, general aviation or military aircraft, whether manned or unmanned, including OEM and components logistics, log book and data management, systems integration and project management."
                            photo={photo2}
                            alt="img1"
                            />
                        </div>

            
                        <div className="col s6 l4">
                            <Card8 
                            title="SALES"
                            description="An agency network for sales of general and light aircraft, sports planes, sailplanes, personal transport or recreational airplanes, manned or unmanned, piston or turbine engine or unpowered! Some unique and some so very common, to suit most of a buyer’s needs or requirements."
                            photo={photo3}
                            alt="img1"
                            />
                        </div>

                    </div>
                </div>

            </div>
            




            <div className="card7-container" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh',background:'linear-gradient(to right bottom, #051937, #323e63, #5e6793, #8e94c6, #c0c3fb)',backgroundAttachment:'fixed'}}>
                <div className="container" style={{position:'relative',width:'1150px',padding:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                    <Card7 
                    title="AEROSTRUCTURES"
                    description="Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets"
                    photo={photo1}
                    alt="img1"
                    />

                    <Card7 
                    title="MRO"
                    description="Maintenance, repair and overhaul (MRO) of commercial airliners, general aviation or military aircraft, whether manned or unmanned, including OEM and components logistics, log book and data management, systems integration and project management."
                    photo={photo2}
                    alt="img1"
                    />

                    <Card7 
                    title="SALES"
                    description="An agency network for sales of general and light aircraft, sports planes, sailplanes, personal transport or recreational airplanes, manned or unmanned, piston or turbine engine or unpowered! Some unique and some so very common, to suit most of a buyer’s needs or requirements."
                    photo={photo3}
                    alt="img1"
                    />
                </div>
            </div>


            
        </section>
    )
}





















{/* <div className="row" style={{margin:'30px 30px'}}>
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='okimage' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">AEROSTRUCTURES<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">AEROSTRUCTURES<i className="material-icons right">close</i></span>
                            <p>Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets.</p>
                           
                        </div>
                    </div>
                </div>
        
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='okimage' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">MRO<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">MRO<i className="material-icons right">close</i></span>
                            <p>Maintenance, repair and overhaul (MRO) of commercial airliners, general aviation or military aircraft, whether manned or unmanned, including OEM and components logistics, log book and data management, systems integration and project management.</p>
                           
                        </div>
                    </div>
                </div>
            
        
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='okimage' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">SALES<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">SALES<i className="material-icons right">close</i></span>
                            <p>An agency network for sales of general and light aircraft, sports planes, sailplanes, personal transport or recreational airplanes, manned or unmanned, piston or turbine engine or unpowered! Some unique and some so very common, to suit most of a buyer’s needs or requirements.</p>
                           
                        </div>
                    </div>
                </div>
        
            </div> */}