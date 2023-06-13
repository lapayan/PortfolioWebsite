import Banner from './components/banner/banner';
import NavBar from './components/navbar/navBar';
import LineTracker from './components/lineTracker/lineTracker';
import './App.css';

import {Parallax ,ParallaxLayer} from '@react-spring/parallax'
function App() {
  return (
    <div className ='appContainer'> 
      <LineTracker className = 'lineTrackerLayer'/>
      <NavBar className = 'navBarLayer'/>
      <Banner className = 'bannerLayer'/>
    </div> 
  );
}

export default App;
