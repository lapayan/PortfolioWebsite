import React, {Fragment} from'react';
import Banner from './components/banner/banner';
import NavBar from './components/navbar/navBar';
import LineTracker from './components/lineTracker/lineTracker';
import './styles/utils.css';
import './styles/mainStyles.css';

function App() {
  return (
    <div className=' app container' id = 'appContainer'>
      <div className='linetracker container' id = 'lineTrackerContainer'>
              <LineTracker className = 'lineTracker'/>
      </div>
      <div className = 'content container' id = 'contentContainer'> 
        <div className = 'navbar container' id= 'navbarContainer'>
            <NavBar className = 'navbar'/>
        </div> 
        <div className = 'banner container' id='bannerContainer'>
            <Banner className = 'banner'/>
        </div> 
      </div>
    </div>
  ); 
}

export default App;
