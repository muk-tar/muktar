import React from 'react'
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

export default function Steel() {
    return (
        <div className="steel" style={{background:'linear-gradient(to right bottom, #051937, #323e63, #5e6793, #8e94c6, #c0c3fb)'}}> 
            <div className="container">
                <div className="row">
                    <div className="col l4 s6">
                        <Card9 title="Flat Bars" description="Mild Steel" photo={photo1} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Square Bars" description="Mild Steel" photo={photo2} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Flat Bars" description="Mild Steel" photo={photo3} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Octogonal Bars" description="Mild Steel" photo={photo4} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Round Bars" description="Mild Steel" photo={photo5} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="TMT Bars" description="Mild Steel" photo={photo6} />
                    </div>


                    <div className="col l4 s6">
                        <Card9 title="Wire Rod" description="Mild Steel" photo={photo7} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Barbed Wire" description="Mild Steel" photo={photo8} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Link chain" description="Mild Steel" photo={photo9} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Wire Nails" description="Mild Steel" photo={photo10} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Hex Head Bolt" description="Mild Steel" photo={photo11} />
                    </div>

                    <div className="col l4 s6">
                        <Card9 title="Hex Nuts" description="Mild Steel" photo={photo12} />
                    </div>
                    


                    
                    
                </div>
            </div>
        </div>
        
    )
}



