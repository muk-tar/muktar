import React from 'react'
import './css/Home.css'
import photo from '../images/home.jpg'


export default function Home() {
    return (
        <section className="home" style={{backgroundImage:`url(${photo})`,backgroundAttachment:'fixed', backgroundSize: '100% 100%', backgroundRepeat:"no-repeat"}}>
            <div className="container">
                <h1>Muktar Enterprise</h1>
                <button className="btn btn-primary">Explore</button>
            <div>
                <h6>a build of different companies, businesses and entities operating in varied sectors and segments as a collective and complementary aggregate.</h6>
                <h6>Airport | Fintech | Industry 4.0 | Logistics |Iot and AI | UTM | Smart City !</h6>
                <h6>Pioneering businesses and technologies, creating sustainable value with collaborative and indulgent association banking on skill, knowledge, perseverance and steadfastness.</h6>
            </div>
            </div>
        </section>
    )
}
