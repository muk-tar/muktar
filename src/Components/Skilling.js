import React from 'react'
import './css/Skilling.css'


import photo from '../images/Patterns/4.jpeg'
import photo1 from '../images/skilling/programm.png'
import photo2 from '../images/skilling/programmer.png'

import {Card2} from './Card'
import NavBar from './NavBar'
import './css/Aviation.css'

export default function Skilling() {
    return (
        <div className="skilling">
            <div id="bg">
                <img src={photo} alt="clkfpf" />
            </div>
            <NavBar too="/explore" />
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <Card2 
                        title="CoE Aerospace"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda omnis cum quidem exercitationem. Debitis illo molestiae quia quis necessitatibus nemo modi architecto eos autem commodi, odio aut accusantium laudantium natus."
                        photo={photo1}
                        alt="img1"
                        />
                    </div>



                    <div className="col s12 l6">
                        <Card2 
                        title="CoE Aviation"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda omnis cum quidem exercitationem. Debitis illo molestiae quia quis necessitatibus nemo modi architecto eos autem commodi, odio aut accusantium laudantium natus."
                        photo={photo2}
                        alt="img1"
                        />
                    </div>
            
                </div>
            </div>
        </div>
    )
}














