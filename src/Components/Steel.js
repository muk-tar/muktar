import React,{useEffect} from 'react'
import {gsap} from 'gsap'
import './css/Steel.css'
import photo1 from '../images/steel/steel_flat.png'
import photo2 from '../images/steel/steel_square.png'
import photo3 from '../images/steel/steel_octagonal.png'
import photo4 from '../images/steel/steel_round.png'
import photo5 from '../images/steel/steel_tmt.png'
import photo6 from '../images/steel/steel_wirerod.png'
import photo7 from '../images/steel/steel_barbedwire.png'
import photo8 from '../images/steel/steel_chain.png'
import photo9 from '../images/steel/steel_nails.png'
import photo10 from '../images/steel/steel_bolt.png'
import photo11 from '../images/steel/steel_nut.png'
import photo12 from '../images/steel/steel_hexscrew.png'
import {Card9} from './Card'
import NavBar from './NavBar'

export default function Steel() {

    useEffect(() => {
        gsap.fromTo(".steel", {background:'linear-gradient(90deg, rgba(0,212,255,1) 15%, rgba(9,109,121,1) 40%, rgba(0,25,36,1) 100%)'},{background:'linear-gradient(90deg, rgba(0,25,36,1) 0%, rgba(9,109,121,1) 40%, rgba(0,212,255,1) 82%)',repeat:-1,yoyo:true,duration:3});
    }, [])


    return (
        <div className="steel" > 
            <NavBar too="/explore" />
            <div className="container">
                <div className="row">
                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Flat Bars" photo={photo1} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Square Bars" photo={photo2} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Octogonal Bars" photo={photo3} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Round Bars" photo={photo4} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="TMT Bars" photo={photo5} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Wire Rod" photo={photo6} />
                    </div>


                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Barbed Wire" photo={photo7} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Link chain" photo={photo8} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Wire Nails" photo={photo9} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Hex Head Bolt" photo={photo10} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Hex Nuts" photo={photo11} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Mild Steel" description="Hex Head Screw" photo={photo12} />
                    </div>
     
                </div>
            </div>
        </div>
        
    )
}



