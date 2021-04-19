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
import {Card11} from './Card'

export default function Explore() {
    return (
       <section className="explore" style={{background:'linear-gradient(to right bottom, #051937, #323e63, #5e6793, #8e94c6, #c0c3fb)'}}>
           <div className="container">
                <div className="row">
                    <div className="col l4">
                        <Card11 title="STEEL" description="Community Building" photo={photo1} />
                    </div>

                    <div className="col l4">
                        <Card11 title="AEROSPACE" description="The sky is the limit"  photo={photo2}/>
                    </div>

                    <div className="col l4">
                        <Card11 title="NETWORK" description="Network's the computer"   photo={photo3}/>
                    </div>

                    <div className="col l4">
                        <Card11 title="INFRASTRUCTURE" description="A mile of Runway will take you anywhere"  photo={photo4}/>
                    </div>

                    <div className="col l4">
                        <Card11 title="AVIATION" description="Into the blue yonder"  photo={photo5}/>
                    </div>

                    <div className="col l4">
                        <Card11 title="SKILLING" description="Knowledge isthe greatest treasure"  photo={photo6} />
                    </div>

                    <div className="col l4">
                        <Card11 title="MEDIA" description="The strength of the community"  photo={photo7} />
                    </div>

                    <div className="col l4">
                        <Card11 title="EVENTS & RECREATION" description="Work too can be fun"  photo={photo8} />
                    </div>
                    

                    <div className="col l4">
                        <Card11 title="AFFLIATES" description="Everything official"  photo={photo9} />
                    </div>




                </div>
           </div>
       </section>
    )
}






 {/* <div className="heading">
                <h1>Muktar Enterprise</h1>
            </div>
    
            <div className="row" style={{margin:'0 30px'}}>
                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">STEEL<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">STEEL<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
          
                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">AEROSPACE<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">AEROSPACE<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
            
          
                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">NETWORKS<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">NETWORKS<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
           

        
                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">INFRASTRUCTURE<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">INFRASTRUCTURE<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
                

                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">AVIATION<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">AVIATION<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">SKILLING<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">SKILLING<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">MEDIA<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">MEDIA<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">EVENTS<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">EVENTS<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">AFFILIATES<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">AFFILIATES<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={photo} alt='' />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">CONTACT<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">STEEL<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p><a href="#">This is a link</a></p>
                        </div>
                    </div>
                </div>
        </div> */}