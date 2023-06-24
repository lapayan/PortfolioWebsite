import Banner from './components/banner/banner';
import NavBar from './components/navbar/navBar';
import AboutMe from './components/aboutMe/aboutMe';
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
        <div className = 'aboutMe container' id='aboutMeContainer'>
            <AboutMe className = 'aboutMe'/>
        </div> 
      </div>
    </div>
  ); 
}

export default App;
