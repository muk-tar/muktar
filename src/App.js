import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Explore from './Components/Explore'
import Steel from './Components/Steel'
import Aerospace from './Components/Aerospace'
import Network from './Components/Network'
import Infrastructure from './Components/Infrastructure'
import Aviation from './Components/Aviation'
import Skilling from './Components/Skilling'
import Media from './Components/Media'
import Events from './Components/Events'
import Affiliates from './Components/Affiliates'
import ContactUs from './Components/ContactUs'
import Practice from './Components/Practice'
import About from './Components/About'

export default function App() {
  return (
    <div className="App">
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/explore' component={Explore} />
          <Route path='/steel' component={Steel} />
          <Route path='/aerospace' component={Aerospace} />
          <Route path='/network' component={Network} />
          <Route path='/infrastructure' component={Infrastructure} />
          <Route path='/aviation' component={Aviation} />
          <Route path='/skilling' component={Skilling} />
          <Route path='/media' component={Media} />
          <Route path='/events' component={Events} />
          <Route path='/affiliates' component={Affiliates} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/practice' component={Practice} />
          <Route path='/aboutus' component={About} />
        </Switch>
    </div>
  )
}