import pandaLogo from '../../assets/pandaLogo.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import './profile.css';

const Profile = () => { 
    return(
        <div className="profile"> 
            <div className="pictureContainer"> 
                <img    className='panda'
                        src = {pandaLogo} 
                        alt='logo' 
                        style={{ height:500, width: 500 }}/>
            </div>
            <div className='textContainer'>
                    <p>Hello! I am</p>
                    <h1> Luis Payan</h1> 
                    <h2>Software engineer</h2>
                    <p>
                        I bring beauty into the world through
                    </p>
                    <p>
                        well designed code and I love learning
                    </p> 
                    <p>
                        new skills.
                    </p>
            </div>
            <div className='socialsContainer'>
                <a href='https://github.com/lapayan'><img class='icon'
                            src = {github} 
                            alt='logo' 
                            style={{ height:100, width: 100 }}/></a>
                <a href='https://www.linkedin.com/in/luis-payan-6814b1243/'>
                    <img    class='icon'
                            src = {linkedin} 
                            alt='logo' 
                            style={{ height:100, width: 100 }}/></a>
            </div>
            <div className = 'buttonContainer'>
                <a href='mailto:luispayan2001@gmail.com'><button className= 'btn' >Contact Me!</button> </a>   
            </div> 
        </div> 
    )
}
export default Profile;