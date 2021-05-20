import React from 'react'
import './css/Explore.css'
import photo1 from '../images/explore/photo31.jpg'
import photo2 from '../images/explore/photo41.jpg'
import photo3 from '../images/explore/photo51.jpg'
import photo4 from '../images/explore/photo61.jpg'
import photo5 from '../images/explore/photo71.jpg'
import photo6 from '../images/explore/photo81.jpg'
import photo7 from '../images/explore/photo91.jpg'
import photo8 from '../images/explore/photo101.jpg'
import photo9 from '../images/explore/photo111.jpg'
import photo10 from '../images/explore/contact.jpg'
import photo11 from '../images/explore/aboutus.jpg'

import NavBar from './NavBar'
import {Card14} from './Card'

export default function Explore() {
    return (
       <section className="explore">
       
            <NavBar too="/" />
           <div className="explore-container">
                <Card14 title="STEEL" description="Community Building" title2="Mild Steel" transfer="steel" photo={photo1} />
                <Card14 title="AEROSPACE" description="The sky is the limit" title2="Design to end-of-life" transfer="aerospace" photo={photo2}/>
                <Card14 title="NETWORK" description="Network's the computer" title2="communication to computing" transfer="network"  photo={photo3}/>
                <Card14 title="INFRASTRUCTURE" description="A mile of Runway will take you anywhere" title2="Industrial Park to Smart City" transfer="infrastructure" photo={photo4}/>
                <Card14 title="AVIATION" description="Into the blue yonder" title2="Airlines to Flying Clubs" transfer="aviation" photo={photo5}/>
                <Card14 title="SKILLING" description="Knowledge isthe greatest treasure" title2="Centers of Excellence" transfer="skilling" photo={photo6} />
                <Card14 title="MEDIA" description="The strength of the community" title2="English periodical - aeronautics & general aviation." transfer="explore" photo={photo7} />
                <Card14 title="EVENTS & RECREATION" description="Work too can be fun" title2="Air Shows to Thematic Tours" transfer="events" photo={photo8} />
                <Card14 title="AFFLIATES" description="Bussiness associates" title2="Business Partners" photo={photo9} transfer="affiliates" /> 
                <Card14  title2="about us" photo={photo11}  transfer="aboutus" /> 
                <Card14  title2="mailto:m.bluth@example.com" photo={photo10} transfer="mailto:m.bluth@example.com" contact="contact" /> 
           



                {/* <div className="row">
                    <div className="col l3">
                        <Card14 title="STEEL" description="Community Building" photo={photo1} />
                    </div>

                    <div className="col l3">
                        <Card14 title="AEROSPACE" description="The sky is the limit"  photo={photo2}/>
                    </div>

                    <div className="col l3">
                        <Card14 title="NETWORK" description="Network's the computer"   photo={photo3}/>
                    </div>

                    <div className="col l3">
                        <Card14 title="INFRASTRUCTURE" description="A mile of Runway will take you anywhere"  photo={photo4}/>
                    </div>

                    <div className="col l3">
                        <Card14 title="AVIATION" description="Into the blue yonder"  photo={photo5}/>
                    </div>

                    <div className="col l3">
                        <Card14 title="SKILLING" description="Knowledge isthe greatest treasure"  photo={photo6} />
                    </div>

                    <div className="col l3">
                        <Card14 title="MEDIA" description="The strength of the community"  photo={photo7} />
                    </div>

                    <div className="col l3">
                        <Card14 title="EVENTS & RECREATION" description="Work too can be fun"  photo={photo8} />
                    </div>
                    

                    <div className="col l3">
                        <Card14 title="AFFLIATES" description="Everything official"  photo={photo9} />
                    </div>




                </div> */}
               
            </div>
       </section>
    )
}


