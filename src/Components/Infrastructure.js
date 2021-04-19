import React from 'react'
import {Card4} from './Card'
import './css/Infrastructure.css'
import photo1 from '../images/infra/photo19.jpg'
import photo2 from '../images/infra/photo20.jpg'
import photo3 from '../images/infra/photo21.jpg'
import photo4 from '../images/infra/photo22.jpg'

export default function Infrastructure() {
    return (
        <div className="infra">
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <Card4 
                        title="AEROPARK"
                        description="Industrial cluster and park for the manufacture, maintenance, repair, overhaul, service, design, engineering, logistics, etc of aircraft and precision engineered sub-assemblies, components and parts of metal, composites and other material by established and start-up entrepreneurs"
                        photo={photo1}
                        alt="img1"
                        />
                    </div>
                    
                    <div className="col s6">
                        <Card4 
                        title="Smart City"
                        description="A green, sustainable, eco-friendly, smart city with best and latest of available technologies and processes for a society of tomorrow in a world of social distancing, connected living and multi-generational accessibility; an urbane environment in the countryside."
                        photo={photo2}
                        alt="img1"
                        />
                    </div>

                    <div className="col s6">
                        <Card4 
                        title="Airport"
                        description="Airport with a modularised terminal building scalable to commercial demands with digital air traffic control, multiple hangars, aircraft test facility, multi-modal logistics hub, a viewing gallery for air shows, multi-fuel station and proximity to the Aeropark."
                        photo={photo3}
                        alt="img1"
                        />
                    </div>

                    <div className="col s6">
                        <Card4 
                        title="EPC"
                        description="Engineering, procurement and construction (EPC) besides planning, designing and simulation too. We provide town planning, civil and environmental engineering and technology identification and deployment services and consultations!"
                        photo={photo4}
                        alt="img1"
                        />
                    </div>

            
                </div>
            </div>
        </div>
    )
}






















{/* <div className="row center" style={{margin:'0 30px'}}>
                <div className="col center">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">AEROPARK<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">AEROPARK<i className="material-icons right">close</i></span>
                            <p>Industrial cluster and park for the manufacture, maintenance, repair, overhaul, service, design, engineering, logistics, etc of aircraft and precision engineered sub-assemblies, components and parts of metal, composites and other material by established and start-up entrepreneurs.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
        
                <div className="col">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">SMART CITY<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">SMART CITY<i className="material-icons right">close</i></span>
                            <p>A green, sustainable, eco-friendly, smart city with best and latest of available technologies and processes for a society of tomorrow in a world of "social distancing", connected living and multi-generational accessibility; an urbane environment in the countryside.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
            
        
                <div className="col">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">AIRPORT<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">AIRPORT<i className="material-icons right">close</i></span>
                            <p>Airport with a modularised terminal building scalable to commercial demands with digital air traffic control, multiple hangars, aircraft test facility, multi-modal logistics hub, a viewing gallery for air shows, multi-fuel station and proximity to the Aeropark.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
        


                <div className="col">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">EPC<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">EPC<i className="material-icons right">close</i></span>
                            <p>Engineering, procurement and construction (EPC) besides planning, designing and simulation too. We provide town planning, civil and environmental engineering and technology identification and deployment services and consultations!</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
            
            </div> */}