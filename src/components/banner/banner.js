import './banner.css';
import {ReactComponent as Panda} from '../../assets/pandaLogo.svg';
const Banner = () =>{ 
    return (
        <section className="banner" id="home">   
            <div className="bannerContainer">
                <div className = "introduction">
                    <div className = 'welcomeText'>
                        <span style ={{color:'#CBBEC2'}}>{`{`}</span>
                        <span style ={{color:'#E4B781'}}>{`welcomeMessage`}</span>
                        <span style ={{color:'#DF769B'}}>{`:`}</span>
                    </div>
                </div>
                <div className='mainValueStatementContainer'>
                    <div className = "valueStatementContainer1">
                        <div className = 'valueStatementText1'>
                            <span className ='valueStatementLine1'style ={{color:'#D67E5C'}}>I bring beauty into the world through well</span>
                        </div>
                    </div>
                    <div className='valueStatementContainer2'>
                        <div className = 'valueStatementText2'>
                            <span style ={{color:'#D67E5C'}}> designed code and I love learning new skills.</span>
                        </div>
                    </div>
                    <div className='closingBracketContainer'>
                       <span className = 'closingBracket'style ={{color:'#CBBEC2'}}>{`} `}</span> 
                    </div>
                </div>
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
