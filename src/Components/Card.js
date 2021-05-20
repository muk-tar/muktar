import React, {useEffect,useState} from 'react'
import './css/Card.css'
import M from 'materialize-css';

import {NavLink} from 'react-router-dom'

import {gsap} from 'gsap'


const Card1=({title,description,photo})=>{
    console.log({photo,title,description})
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




const Card5=({title,description,photo})=>{
   
        useEffect(() => {
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.tabs');
                var instances = M.Tabs.init(elems);
                console.log('hello1')   
            })
            
        }, [])
        
        
        console.log('hello2')   
    return(
        <div className="card ">
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a href="#/test1">Test 1</a></li>
            <li className="tab"><a className="active" href="#/test2">Test 2</a></li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <div id="test1">Test 1</div>
          <div id="test2">Test 2</div>
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





const Card7=({title,description,photo})=>{
    return(
            <div className="card7">
                <div className="circlee">
                    <img src={photo} alt="circleimage"></img>
                    <h4 className="circle-text">{title}</h4>

                </div>
                <div className="contentt">
                    <p>{description}</p>
                </div>
            </div>
    )
}   






const Card8=({title,description,photo})=>{


    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return(
        <div className={`card ${hovered? 'large': 'small'}`}    onMouseEnter={toggleHover}  onMouseLeave={toggleHover}>
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


function Card10(){
    return(
        <div className="card grey">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label for="last_name">Last Name</label>
                    </div>

                    <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate"/>
                        <label for="icon_telephone">Telephone</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>


                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Textarea</label>

                        <button className="btn">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}







const Card11=({title,description,photo})=>{
    return(
        // <div className="card blue-grey darken-1" style={{height:'200px'}}>
        <div className="card card11" style={{height:'200px', background:`url(${photo})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}} >
            <div className="card-content white-text center ">

                <span className="card-title">{title}</span>
                <p>{description}</p>
                {/* <a className="btn-floating"><i className="material-icons">add</i></a> */}
            </div>

            
        </div>
    )
}





const Card12=({title,description,photo})=>{


    const bg_img=`url(${photo})`
    return(
      
        <div className="card thecard">

            <div className="thefront"><h1>{title}</h1></div>

            <div className="theback" style={{backgroundImage:bg_img , backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
            <button>Submit</button></div>

        </div>

    )
}





const Card13=({title,description,photo})=>{


    // const bg_img=`url(${photo})`
    return(
      
        <div className="card13">

            <div className="face front"><h1>Front</h1></div>

            <div className="face back" ><h1>Back</h1>
            <button>Submit</button></div>

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
                <h3 className="date">2009</h3>
              
                <p className="txt">
               {description}
                </p>
                <h3 className="details"><a href={lin} target="_blank">MORE</a></h3>
            </div>
        </article>
    )
}





// <li><NavLink to="/">Home</NavLink></li>



// const Card12=({title,description,photo})=>{


//     return(
//         <div className="card12 middle">
//             <div className="front">
//                 <img src={photo} alt="dummyimg"/>
//             </div>
            
//             <div className="back">
//                 <div className="back-content middle">
//                     <h2>Rahul</h2>
//                     <spam>Lorem ipsum dolor sit amet.</spam>
//                     <div className="sm">
//                         <a href="#"><i className="material-icons">insert_chart</i></a>
//                         <a href="#"><i className="material-icons">insert_chart</i></a>
//                         <a href="#"><i className="material-icons">insert_chart</i></a>
//                         <a href="#"><i className="material-icons">insert_chart</i></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



export {Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8, Card9, Card10,Card11,Card12,Card13,Card14,Card15}





























// function Card1({title,description,image,alt}) {

//     let newClassName = `color_bg ${alt}`
//     let bg_img=`url(${image})`
//     return (
//         <div className="card small">
//             <div className="wrapper">
//                 <div className={newClassName}></div>
//                 <div className="card-img" style={{"backgroundImage":bg_img}}></div>
//                 <div className="triangle">
//                     <svg height="210" width="400">
//                     <path d="M150 0 L75 200 L225 200 Z" />
//                     </svg>
//                 </div>

//                 <div className="card-info">
//                     <h2>{title}</h2>
//                     <p>card info</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

