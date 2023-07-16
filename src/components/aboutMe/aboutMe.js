import './aboutMe.css'; 
import bitmoji from '../../assets/Bitmoji.svg';
const AboutMe = () => { 
    return(
        <div className='aboutme' id = 'aboutme'> 
            <h1 className='title'>About Me</h1>
            {/* <div className='bitmojiContainer'></div>   */}
                <img    className='bitmoji'
                            src = {bitmoji} 
                            alt='logo' 
                            style={{ height:400, width: 500 }}/>
            
            <div class="abouttextContainer">
                <p>
                In 2021, while working in the ICU with COVID patients, I discovered my passion for front-end development. It was a challenging and exciting journey that transformed my lifestyle into one of continuous learning. Over the past 2 years, I honed my skills in front-end development, back-end development, and web architecture. Today, I am seeking an opportunity to join a dynamic team that will challenge and support my growth as a software engineer.
                </p>
          </div>
        </div>
    )
}; 

export default AboutMe;