import React from 'react'
import './css/Skilling.css'
import photo1 from '../images/skilling/programm.png'
import photo2 from '../images/skilling/programmer.png'

import {Card2} from './Card'

export default function Skilling() {
    return (
        <div className="skilling">
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

















{/* <div className="row container center">
                <div className="col s12 m6 l3">
                    <div className="card">
                        <div className="card-image">
                        <img src={photo} alt="Imgphoto" />
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="card">
                        <div className="card-image">
                        <img src={photo} alt="Imgphoto" />
                        <span className="card-title">Card Title</span>
                        <a href="#" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div> */}