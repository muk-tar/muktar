import React,{useEffect} from 'react'
import './css/Practice.css'
import {gsap} from 'gsap'
import svgg from '../svg/undraw_biking_kc4f.svg'

export default function Practice() {
 

    useEffect(() => {
        gsap.fromTo(".box", {x:-100},{stagger:1,background:'yellow',rotation: 360, x: 0, duration: 2});
        // gsap.fromTo(".practice", {background:'linear-gradient(90deg, rgba(0,212,255,1) 15%, rgba(9,109,121,1) 40%, rgba(0,25,36,1) 100%)'},{background:'linear-gradient(90deg, rgba(0,25,36,1) 0%, rgba(9,109,121,1) 40%, rgba(0,212,255,1) 82%)',repeat:-1,yoyo:true,duration:3});
       
        
    }, [])

    return (
        <div className="practice">
           <div className="containerP">
           
                <div className="left">   
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, esse. Ipsam, culpa. Neque deleniti facilis quae harum officia, dolorem hic beatae magnam, adipisci esse sunt pariatur consectetur voluptatem rem nihil? Modi voluptate recusandae, harum commodi quisquam quidem, ab autem ipsam possimus expedita placeat maxime accusantium, vero officiis quas ullam earum!</p>
                </div>
       
                <div className="right">
                    <div className="coll"><h1>hello</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab qui sint tenetur labore ipsam repellat quo repudiandae excepturi beatae cupiditate?</p></div>
                    <div className="coll"><h1>hello</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab qui sint tenetur labore ipsam repellat quo repudiandae excepturi beatae cupiditate?</p></div>
                    <div className="coll"><h1>hello</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab qui sint tenetur labore ipsam repellat quo repudiandae excepturi beatae cupiditate?</p></div>
                </div>

              
           </div>
        </div>



       
    )
}




{/*  <div className="box box1"><NavLink to="/">ELLOJIIUIUNINIMI</NavLink></div>
            <div className="box box2"></div>
            <div className="box box3"></div>

        
 */}







{/*      
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="practice-container2">
                        <div className="overlay">
                            <div class = "items"></div>
                            <div class = "items head">
                                <p>Flower Embroidery Hoop Art</p>
                                <hr />
                            </div>
                            <div class = "items price">
                                <p className="old">$699</p>
                                <p className="new">$345</p>
                            </div>
                            <div className="items cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                


                <div className="col">
                    <div className="practice-body">
                        <article className="card">
                            <div className="thumb"></div>
                            <div className="infos">
                                <h2 className="title">new york city<span className="flag"></span></h2>
                                <h3 className="date">november 2 - 4</h3>
                                <h3 className="seats">seats remaining: 2</h3>
                                <p className="txt">
                                Join us for our Live Infinity Session in
                                beautiful New York City. This is a 3 day
                                intensive workshop where you'll learn
                                how to become a better version of...
                                </p>
                                <h3 className="details">event details</h3>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            </div>

           
 */}