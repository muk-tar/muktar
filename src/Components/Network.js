import React from 'react'
import {Card6} from './Card'
import photo1 from '../images/network/photo18a.jpg'
import photo2 from '../images/network/photo18b.jpg'
import photo3 from '../images/network/photo18c.jpg'
import photo4 from '../images/network/photo18d.jpg'
import photo5 from '../images/network/photo18e.jpg'
import photo6 from '../images/network/photo18f.jpg'
import photo7 from '../images/network/photo18g.jpg'
import photo8 from '../images/network/photo18h.jpg'
import photo9 from '../images/network/photo18i.jpg'



export default function Network() {
    return (
        <div className="network " >
            <div className="cardss">
                <Card6 
                title="UAS Unmanned aerial systems"
                description="includes, besides the UAV, elements such as mission planning, ground control stations, data links, launch and recovery, payload, controller and other support equipment"
                photo={photo1}
                alt="img1"
                />

                <Card6 
                title="UTM UAV traffic management"
                description="an air traffic management ecosystem in an urban environment beyond visual line-of-sight at altitudes under 1,000 ft above ground level for autonomously controlled UAS."
                photo={photo2}
                alt="img1"
                />

                <Card6 
                title="RVT remote virtual tower"
                description="a digital air traffic service (ATS) for airports somewhere other than at the airport, managing multiple airports from a single location as contingency and primary services"
                photo={photo3}
                alt="img1"
                />

                <Card6 
                title="FIMS Flight information management system"
                description="critical for all flight management of drones, UAVs, airplanes and other flying objects ensuring incident free movement of aircraft."
                photo={photo4}
                alt="img1"
                />

                <Card6 
                title="RF radios and antennae"
                description="radio frequency manipulation for communication, heating, scanning, measurements and bespoke applications."
                photo={photo5}
                alt="img1"
                />

                <Card6 
                title="mATM Inclusive banking solutions"
                description="banking business correspondent network providing instant money transactions including cash deposits, withdrawals..."
                photo={photo6}
                alt="img1"
                />


                <Card6 
                title="Data Center Industry 4.0 and Logistics 4.0 capable"
                description="Facility equipped to support cloud based infrastructure and applications for automation of industries and supply chain management with interconnection, data transparency and decentralisation"
                photo={photo7}
                alt="img1"
                />

                <Card6 
                title="IoT & AI Internet of things and artificial intelligence"
                description="“things” with sensors, software and data analytics embedded and networked to deliver utility and daily use services in your home, office, factory, warehouse, shop, campus, locality or city"
                photo={photo8}
                alt="img1"
                />

                <Card6 
                title="CLEC Cloud and communication solutions"
                description="Hosted IP-PBX, cloud voice, DLEC, MVNE, MVNA, Video telephony, hosted cloud communications, value added services, soft switching,robotic business process automation, VoWiFi, VoLTE,"
                photo={photo9}
                alt="img1"
                />

               
            </div>
        </div>
    )
}






















{/* <div class="row">
                <div class="col s12 l4">
                <div class="card">
                    <div class="card-image" >
                    <img src={photo} style={{height:"300px"}} alt='' /> 
                    </div>
                    <div class="card-content">
                    <span class="card-title">UAS Unmanned aerial systems</span>
                    <p>includes, besides the UAV, elements such as mission planning, ground control stations, data links, launch and recovery, payload, controller and other support equipment.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>


                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">UTM UAV traffic management</span>
                    <p>an air traffic management ecosystem in an urban environment beyond visual line-of-sight at altitudes under 1,000 ft above ground level for autonomously controlled UAS.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>


                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">RVT remote virtual tower</span>
                    <p>A digital air traffic service (ATS) for airports somewhere other than at the airport, managing multiple airports from a single location as contingency and primary services.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>


                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">RF radios and antennae</span>
                    <p>radio frequency manipulation for communication, heating, scanning, measurements and bespoke applications.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>

                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">mATM Inclusive banking solutions</span>
                    <p>banking business correspondent network providing instant money transactions including cash deposits, withdrawals...</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>


                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">FIMS Flight information management system</span>
                    <p>critical for all flight management of drones, UAVs, airplanes and other flying objects ensuring incident free movement of aircraft</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>



                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">Data Center Industry 4.0 and Logistics 4.0 capable</span>
                    <p>Facility equipped to support cloud based infrastructure and applications for automation of industries and supply chain management with interconnection, data transparency and decentralisation.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>


                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">IoT & AI Internet of things and artificial intelligence</span>
                    <p>“things” with sensors, software and data analytics embedded and networked to deliver utility and daily use services in your home, office, factory, warehouse, shop, campus, locality or city.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>


                <div class="col s12 l4">
                <div class="card" >
                    <div class="card-image">
                    <img src={photo} style={{height:"300px"}} alt='' />
                    </div>
                    <div class="card-content">
                    <span class="card-title">CLEC Cloud and communication solutions</span>
                    <p>Hosted IP-PBX, cloud voice, DLEC, MVNE, MVNA, Video telephony, hosted cloud communications, value added services, soft switching,robotic business process automation, VoWiFi, VoLTE</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Read more</a>
                    </div>
                </div>
                </div>

                
            </div> */}