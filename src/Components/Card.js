import React, {useEffect} from 'react'
import './css/Card.css'

import {NavLink} from 'react-router-dom'

import {gsap} from 'gsap'


const Card1=({title,description,photo})=>{
    const bg_img=`url(${photo})`
    return(
        <div className="card small card1" style={{backgroundImage:bg_img , backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
            <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a href="#/">Read more...</a>
            </div>
        </div>
    )
}




const Card2=({title,description,photo})=>{
    return(
        <div className="card large card2">
        <div className="card-image">
          <img src={photo}  alt="somephoto" />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href="#/">This is a link</a>
        </div>
        </div>                                                                                    
    )
}




const Card3 =({title,description,photo})=>{
    return(
        <div className="card medium card3">
        <div className="card-image">
          <img src={photo}  alt="somephoto" />
          <span className="card-title">{title}</span>
    
         
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        </div>
    )
}

     




const Card4=({title,description,photo})=>{
    return(
        <div className="card small card4">
            <div className="card-image waves-effect waves-block waves-light">
            <img src={photo} className="activator"  alt="somephot" />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
            <p><a href="#/">This is a link</a></p>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
            <p>{description}</p>
            </div>
        </div>
    )
}





const Card6=({title,description,photo})=>{

    const bg_img=`url(${photo})`
   
    return(
        <a href="#/" className="card6">
            <div className="card__image" style={{backgroundImage:bg_img}}></div>
            <div className="card__content">
                <div className="card__title"><span className="card-title">{title}</span></div>
                <div className="card__snippet"><p>{description}</p></div>
                <div className="card__readmore">Read More</div>
            </div>
        </a>
    )
}





const Card9 =({title,description,photo})=>{
    return(
        <div className="card">
            <div className="card-image">
              <img src={photo} alt="cardimage" />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <span>{description}</span>
            </div>
        </div>
    )
}





const Card14=({title,description,photo,title2,transfer,contact})=>{


    useEffect(() => {
        gsap.fromTo(".flip-card", {x:-200},{rotation: 360, x: 0, duration: 1});
       
    }, [])


    const transferto = `/${transfer}`
  

    // const bg_img=`url(${photo})`
    return(
      

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={photo} alt="Avatar" style={{width:'250px',height:'250px', borderRadius:'20px', opacity:.7}} />
                    <div className="front-card-content">
                        <h5>{title}</h5>
                        <p>{description}</p>
                       
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="front-card-content">
                 {/*    <a href="#" style={{border:"2px solid red"}}>jiohiuguigiohijhihhijhij</a> */}
                        {contact? <a href={title2}>{title2}</a>:<NavLink to={transferto} style={{color:'white'}}>{title2}</NavLink>}
                    </div>
                  
                
                </div>
            </div>
      </div>


      
       

    )
}






const Card15=({title,description,photo,flag,lin})=>{

    const bg_img =`url(${photo}) `
    const fl_img =`url(${flag}) `


    return(
        <article className="card">
            <div className="thumb" style={{background: bg_img, backgroundSize:'100% 100%'}}></div>
            <div className="infos">
                <h2 className="title">{title}<span className="flag" style={{background:fl_img,backgroundSize:'100% 100%'}}></span></h2>
              
                <p className="txt">
               {description}
                </p>
                <h3 className="details"><a href={lin} target="_blank" rel="noreferrer">MORE</a></h3>
            </div>
        </article>
    )
}




export {Card1,Card2,Card3,Card4,Card6,Card9,Card14,Card15}
