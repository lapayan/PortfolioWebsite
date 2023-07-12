import './navBar.css';

const NavBar = () => {
    return (
        <div className = 'mainNavBar'> 
            <div className='name'>
                <h1>Luis Payan</h1>
            </div>
            <div className = 'navMenu'> 
                <ul className = 'navLinks'> 
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div> 
    )
}; 

export default NavBar;
