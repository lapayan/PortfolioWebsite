import './banner.css';
import {ReactComponent as Panda} from '../../assets/personalBrandLogo.svg';
const Banner = () =>{ 
    return (
        <section className="banner" id="home">   
            <div className="bannerContainer">
                <div className = "introduction">
                    <span style ={{color:'#CBBEC2'}}>{`{`}</span>
                    <span style ={{color:'#E4B781'}}>{` welcomeMessage`}</span>
                    <span style ={{color:'#DF769B'}}>{` :`}</span>
                </div>
                <p className = 'valueStatement' style ={{color:'#D67E5C'}}> I bring beauty into the world through well designed code and I love learning new skills.</p>
                <a className = 'button' href="https://www.linkedin.com/in/luis-payan-6814b1243/"> 
                     <button className = 'letsConnectButton'> Say Hello! </button>
                 </a>
                <div className ='logoContainer' >
                    <Panda className = 'panda'/>
                </div>
            </div>
        </section>
    )
};

export default Banner; 
