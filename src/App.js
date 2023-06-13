import Banner from './components/banner/banner';
import NavBar from './components/navbar/navBar';
import LineTracker from './components/lineTracker/lineTracker';
import './App.css';

import {Parallax ,ParallaxLayer} from '@react-spring/parallax'
function App() {
  return (
    <div className ='appContainer'>
      <div className = 'lineTrackerLayer'>
          <LineTracker className = 'lineTracker'/>
      </div> 
      <div className = 'navbarLayer'>
          <NavBar className = 'navbar'/>
      </div> 
      <div className = 'bannerLayer'>
          <Banner className = 'banner'/>
      </div> 
    </div> 
  ); 
}

export default App;
