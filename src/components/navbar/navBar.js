
import './navBar.css';
import monogram from '../../assets/monogramlogo.svg';
const NavBar = () => {
    return (
        <div className = 'mainNavBar'> 
            <div className='Logo'>
                <img 
                    src = {monogram} 
                    alt='logo' 
                    style={{ height:150, width: 300 }}/>
            </div>
            <div className = 'navMenu'> 
                <ul className = 'navLinks'> 
                    <li className="AboutLink"><a href="#aboutme">About</a></li>
                    <li className="SkillsLink"><a href="#skills">Skills</a></li>
                    <li  className="ProjectsLink"><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </div> 
    )
}; 

export default NavBar;
