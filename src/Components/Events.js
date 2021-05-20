import React from 'react'
import photo1 from '../images/events/event1.png'
import photo2 from '../images/events/event2.png'
import photo3 from '../images/events/event3.png'
import photo4 from '../images/events/event4.png'
import photo5 from '../images/events/event5.png'
import photo6 from '../images/events/event6.png'
import {Card3} from './Card'
import NavBar from './NavBar'

import './css/Aviation.css'

import photo from '../images/Patterns/1.jpg'

export default function Events() {
    return (
        <div className="events">
           
                <img src={photo} alt="clkfpf" style={{width:'100vw',position:'absolute',top:0,opacity:0.7,zIndex:-1}} />
           
            <NavBar too="/explore" />
            <div className="container">
                <div className="row">
                    <div className="col s6 l4">
                        <Card3 
                        title="AIR RACES"
                        description="Grand prix, e-planes, experimental class, piston engine class across open, men’s, women’s categories"
                        photo={photo1}
                        alt="img1"
                        />
                    </div>

                    <div className="col s6 l4">
                        <Card3 
                        title="AEROBATICS"
                        description="Club, sport, intermediate, advanced, unlimited contests in open, men’s, women’s categories."
                        photo={photo2}
                        alt="img1"
                        />
                    </div>

                    <div className="col s6 l4">
                        <Card3 
                        title="DRONE & R/Cs"
                        description="Multi-rotor & R/C races, indoors and outdoors for varying weight and age classes in the grand prix and aerobatic categories"
                        photo={photo3}
                        alt="img1"
                        />
                    </div>

                    <div className="col s6 l4">
                        <Card3 
                        title="SAIL PLANES"
                        description="Open, standard, two seater, 15m, 18m, ultralight, sports and club class with varying performances."
                        photo={photo4}
                        alt="img1"
                        />
                    </div>


                    <div className="col s6 l4">
                        <Card3 
                        title="HUMAN POWERED AIRPLANES"
                        description="Hundreds of human powered machines have been built and flown in Japan, Germany, Greece, France, Australia, New Zealand, South Africa, Austria, Canada, Singapore, the United States, and the United Kingdom. Teams elect to fly as many of the tasks assigned, and as often as they wish in order to score points."
                        photo={photo5}
                        alt="img1"
                        />
                    </div>


                    <div className="col s6 l4">
                        <Card3 
                        title="GENERAL AVIATION"
                        description="A biennial event, the only general aviation (GA) event of Asia. The air show will include air displays, conferences, memorabilia and recreation. An week-long experiential event open to all with fly-in, fly-pasts and experiential flights."
                        photo={photo6}
                        alt="img1"
                        />
                    </div>
        
            
                </div>
            </div>
        </div>
    )
}


