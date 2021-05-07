import React from 'react'
import './css/Practice.css'

export default function Practice() {
    return (
        <div className="practice">
           
                
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

           





            





        </div>
    )
}
