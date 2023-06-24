import './banner.css';
import {ReactComponent as Panda} from '../../assets/pandaLogo.svg';
const Banner = () =>{ 
    return (
        <section className="banner" id="home">   
            <div className="bannerContainer">
                <div className = "introduction">
                    <div className = 'welcomeText'>
                        <span style ={{color:'#E66533'}}>{`let `}</span>
                        <span style ={{color:'#D5971A'}}>{`welcomeMessage`}</span>
                        <span style ={{color:'#DF769B'}}>{` = `}</span>
                        <span style ={{color:'#CBBEC2'}}>{`{`}</span>
                    </div>
                </div>
                <div className='mainValueStatementContainer'>
                    <div className = "valueStatementContainer1">
                        <div className = 'valueStatementText1'>
                        <span style ={{color:'#E4B781'}} className = 'valueStatementPropertyName'>{`text`}</span>
                        <span style ={{color:'#DF769B'}} className = 'valueStatementPropertyName'>{`:`}</span>
                            <span className ='valueStatementLine1'style ={{color:'#49E9A6'}}>"I bring beauty into the world through well</span>
                        </div>
                    </div>
                    <div className='valueStatementContainer2'>
                        <div className = 'valueStatementText2'>
                            <span style ={{color:'#49E9A6'}}> designed code and I love learning new skills."</span>
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
