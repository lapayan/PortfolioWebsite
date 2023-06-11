import NavBar from './components/navbar/navBar';
import './App.css';
import Banner from './components/banner/banner';

import {Parallax ,ParallaxLayer} from '@react-spring/parallax'
function App() {
  return (
    <div className ='appContainer'> 
      <NavBar/>
      <Banner/>
    </div> 
  );
}

export default App;
