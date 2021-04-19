import React from 'react'
import photo1 from '../images/aviation/photo7.jpg'
import photo2 from '../images/aviation/pic02.jpg'
import photo3 from '../images/aviation/photo7x.jpg'
import photo4 from '../images/aviation/soaring.jpg'
import {Card1} from './Card'


export default function Aviation() {
    return (
        <div className="aviation">
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














{/* <div class="row">
                <div class="col s12 m6 l3">
                    <div class="card">
                        <div class="card-image">
                        <img src={photo} alt="" />
                        <span class="card-title">Card Title</span>
                        <a href="#" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l3">
                    <div class="card">
                        <div class="card-image">
                        <img src={photo} alt="" />
                        <span class="card-title">Card Title</span>
                        <a href="#" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l3">
                    <div class="card">
                        <div class="card-image">
                        <img src={photo} alt="" />
                        <span class="card-title">Card Title</span>
                        <a href="#" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6 l3">
                    <div class="card">
                        <div class="card-image">
                        <img src={photo} alt="" />
                        <span class="card-title">Card Title</span>
                        <a href="#" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div> */}