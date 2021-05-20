import React from 'react'
import photo from '../images/1976.png'
import photo1 from '../images//affiliates/logo_aviatech.png'
import photo2 from '../images//affiliates/logo_aviatlink.png'
import photo3 from '../images//affiliates/logo_espl.png'
import photo4 from '../images//affiliates/logo_iotspace.png'
import photo5 from '../images//affiliates/logo_marques.png'
import photo6 from '../images//affiliates/logo_nishidha.png'
import photo7 from '../images//affiliates/logo_oxford.jpg'
import inFlag from '../images//affiliates/indian-flag.png'
import ukFlag from '../images//affiliates/uk-flag.png'
import usFlag from '../images//affiliates/us-flag.png'
import './css/Affiliates.css'
import {Card15} from './Card'
import NavBar from './NavBar'

export default function Affiliates() {
    return (
        <div className="affiliates">
            <NavBar too="/explore" />

           <div className="affiliates-container">
                <Card15 title="AVIATECH" photo={photo1} lin="https://aviatlink.com/" flag={inFlag} description="Provides aircraft Evaluation & Appraisals, Aircraft Records Review, Aircraft Pre-purchase Inspections, Buy / Sell / Lease Transaction Assistance, Storage and Maintenance facility for A320 and Boeing 737 Family, Tear-Down and End-of-Life Solutions, On-Site Technical Representation, Remote Technical Support." />
                <Card15 title="AVIALINK" photo={photo2} lin="http://aviatech-hangars.com/" flag={ukFlag} description="Large inflatable maintenance and warehousing facilities for a broad array of industries including as aircraft hangars with easy & fast deployment, wide operating temperature range, high wind resistance, durability & environment friendliness; delivering turnkey solutions even in the most remote locations." />
                <Card15 title="ENTERUX" photo={photo3} lin="https://enterux.com/" flag={usFlag} description="A global aerospace company that provides innovative systems, products and solutions in unmanned aircraft systems to government and commercial clients worldwide. The company produces the MA THOR UAS and MA AirDefence UA aircraft series." />
                <Card15 title="IOT SPACES" photo={photo4} lin="" flag={inFlag} description="A pioneer of open source software and tools operating across platforms and operating systems creating value in voice, video, data and wireless communications between people, processes and devices." />
                <Card15 title="MARQUES" photo={photo5} lin="" flag={usFlag} description="Premises automation and IoT based energy delivery and management systems for homes, offices, warehouses, factories, shops, malls, apartments, communities, municipalities. etc; redefining electrical wiring." />
                <Card15 title="NISIDHA" photo={photo6} lin="https://nishidhafin.tech/" flag={inFlag} description="Inclusive financial digital services to the last mile, taking banking and retailing to the consumers doorstep or the kerb coupled with retail logistics leveraging information, computing and communication technologies." />
                <Card15 title="OXFORD AEROSPACE" photo={photo7} lin="https://www.oxfordaerospace.com/" flag={ukFlag} description="Provides education and training in the aerospace Sciences. The courses have been designed to help promote the personal and professional development of our students. A certificate awarded by Oxford Aerospace provides students with a wealth of knowledge in the Aerospace Sciences, prepares the students for more advanced professional qualifications and for a university degree, enriches their resume/curriculum vitae, and endows continuing professional development (CPD). The academy hosts the Oxford Aerospace Research Centre." />         
           </div> 
        </div>
    )
}
