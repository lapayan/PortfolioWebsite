import Profile from './components/profile/profile';
import NavBar from './components/navbar/navBar';
import AboutMe from './components/aboutMe/aboutMe';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
// import './styles/utils.css';
import './styles/mainStyles.css';

function App() {
  return (
    <div className = 'app' id= 'app'> 
      <NavBar className = 'navbar' id='navbar'/>
      <Profile className = 'profile' id='profile'/>
      <AboutMe className = 'aboutme' id= 'aboutme'/>
      <Skills className = 'skills' id= 'skills'/>
      {/* <Projects className = 'projects' id= 'projects'/> */}
    </div>
  ); 
}

export default App;
