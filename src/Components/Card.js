import React, {useEffect,useState} from 'react'
import './css/Card.css'
import M from 'materialize-css';




function Card1({title,description,photo}){
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


{/* <img src={photo} src={photo} alt="somephoto" /> */}


function Card2({title,description,photo}){
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




function Card3({title,description,photo}){
    return(
        <div className="card medium card3">
        <div className="card-image">
          <img src={photo}  alt="somephoto" />
          <span className="card-title">{title}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
         
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        </div>
    )
}

     



function Card4({title,description,photo}){
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



function Card5({title,description,photo}){
   
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


function Card6({title,description,photo}){

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




function Card7({title,description,photo}){
    return(
            <div className="card7">
                <div className="circlee">
                    <img src={photo}></img>
                    <h4 className="circle-text">{title}</h4>

                </div>
                <div className="contentt">
                    <p>{description}</p>
                </div>
            </div>
    )
}   






function Card8({title,description,photo}){


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



function Card9({title,description,photo}){
    return(
        <div className="card">
            <div className="card-image">
              <img src={photo} />
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
                <div class="row">
                    <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate" />
                        <label for="last_name">Last Name</label>
                    </div>

                    <div class="input-field col s12">
                        <i class="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" class="validate"/>
                        <label for="icon_telephone">Telephone</label>
                    </div>

                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                    </div>


                    <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Textarea</label>

                        <button className="btn">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}






function Card11({title,description,photo}){
    return(
        // <div class="card blue-grey darken-1" style={{height:'200px'}}>
        <div class="card card11" style={{height:'200px', background:`url(${photo})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}} >
            <div class="card-content white-text center ">
                <span class="card-title">{title}</span>
                <p>{description}</p>
                <a class="btn-floating"><i class="material-icons">add</i></a>
            </div>

            
        </div>
    )
}




export {Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8, Card9, Card10,Card11}





























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

