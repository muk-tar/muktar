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
















