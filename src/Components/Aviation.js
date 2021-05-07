import React from 'react'

import photo from '../images/1976.png'
import photo1 from '../images/aviation/photo7.jpg'
import photo2 from '../images/aviation/pic02.jpg'
import photo3 from '../images/aviation/photo7x.jpg'
import photo4 from '../images/aviation/soaring.jpg'
import {Card1} from './Card'


export default function Aviation() {

    const bg_img=`url(${photo})`
    return (
        <div className="aviation" style={{backgroundImage:bg_img , backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
            <div className="container">
                <div className="row">
                    <div className="col s6"> 
                        <Card1
                        title="AIRLINE"
                        description="An airline for a post lockdown world with greater hygiene and social distancing as the new norm for domestic and international air travel"
                        photo={photo1}
                        alt="img1"
                        />
                    </div>


                    <div className="col s6"> 
                        <Card1
                        title="FBO"
                        description="Sale of aviation fuel + Line services for general aviation aircraft + Aircraft rental and sightseeing + Aircraft storage (tie-down or hangar) + Airplane & Fleet management + Aerial advertising and Aerial survey"
                        photo={photo2}
                        alt="img1"
                        />
                    </div>


                    <div className="col s6"> 
                        <Card1
                        title="AIRTAXI"
                        description="An unscheduled air operator for a post lockdown world requiring greater hygiene and social distancing as the new norm for domestic and international air travel with exclusive or shared occupancy"
                        photo={photo3}
                        alt="img1"
                        />
                    </div>


                    <div className="col s6"> 
                        <Card1
                        title="FLYING CLUB"
                        description="A club with flying as its primary sport, promoting “soaring” – the unfettered flying of unpowered aircraft, sailplanes, riding naturally occurring rising currents of air, thermals; a skill taught to every aspiring pilot."
                        photo={photo4}
                        alt="img1"
                        />
                    </div>



                </div>
            </div>
        </div>
    )
}



