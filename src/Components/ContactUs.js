import React from 'react'
import './css/ContactUs.css'
import {Card10} from './Card'

export default function ContactUs() {
    return (
        <div className="contact-us">
        
            <div className="container">
                <div className="heading center"><h1>Contact Us</h1></div>
                <div className="row">
                    <div className="col s6 ">
                        <div className="row">
                            <div className="col">
                                <span><i className="medium material-icons">my_location</i></span>
                            </div>
                            <div className="col">
                                <p>Address</p>
                                <span>6-3-1247, Somajiguda,Hyderabad- 500082.</span>
                            </div> 
                        </div>

                        <div className="row">
                            <div className="col">
                                <span><i className="medium material-icons">call</i></span>
                            </div>
                            <div className="col">
                                <p>Phone</p>
                                <span>9392683370</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <span><i className="medium material-icons">mail</i></span>
                            </div>
                            <div className="col">
                                <p>Email</p>
                                <span>pararahul01@gmail.com</span>
                            </div>
                        </div>

                    </div>
                    <div className="col s6 second-half"><Card10 /></div>
                </div>
            </div>
        </div>
    )
}
