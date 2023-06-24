import React, {useState} from 'react';
import AboutMeFullText from './aboutMeFullText';
import './aboutMe.css'; 

const AboutMe = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };
    
    return(
        <section className = 'AboutMe' id = 'aboutMe'>
            <div className = 'aboutMeContainer'>
                <div className = "aboutMeintroduction">
                        <div className = 'aboutMeIntroText'>
                            <span style ={{color:'#E66533'}}>{`let `}</span>
                            <span style ={{color:'#D5971A'}}>{`AboutMe`}</span>
                            <span style ={{color:'#DF769B'}}>{` = `}</span>
                            <span style ={{color:'#CBBEC2'}}>{`{`}</span>
                        </div>
                </div>
                <div className='mainAboutMeContainer'>
                    <div className = "aboutMeContainer1">
                        <div className = 'aboutMeText1'>
                            <span style ={{color:'#E4B781'}} className = 'aboutMePropertyName'>{`myJourney`}</span>
                            <span style ={{color:'#DF769B'}} className = 'aboutMePropertyName'>{`:`}</span>
                            <span style ={{color:'#49E9A6'}}>
                                "In 2021 I was working in the ICU as a tech with
                            </span>
                        </div>
                    </div>
                    <div className='aboutMeContainer2'>
                        <div className = 'aboutMeText2'>
                            <span style ={{color:'#49E9A6'}}>
                            COVID patients wanting more from life and figuring out my
                            </span>
                        </div>
                    </div>
                    <div className='aboutMeContainer3'>
                        <div className = 'aboutMeText3'>
                            <span style ={{color:'#49E9A6'}}>
                            passions. That same year I discovered front-end development
                            </span>
                        </div>
                    </div>
                    <div className='aboutMeContainer4'>
                        <div className = 'aboutMeText4'>
                            <span style ={{color:'#49E9A6'}}>
                            and fell in love with its challenges...
                            </span>
                        </div>
                    </div>
                    <div className = 'fullTextContainer'>
                        {isShown && <AboutMeFullText/>}
                        {isShown && (
                            <div className = 'closeTextButton'>
                                <button onClick={handleClick} className='closeButton'>X</button>
                            </div>
                        )}
                    </div>
                    <div className='clickForMoreButton'> 
                        <button className = 'expandTextButton' onClick={handleClick}>Click For More!</button> 
                    </div>
                    <div className='closingBracketContainerAboutMe'>
                       <span className = 'closingBracketAboutMe'style ={{color:'#CBBEC2'}}>{`} `}</span> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
