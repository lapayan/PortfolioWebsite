import React from 'react';
import {ReactComponent as Panda} from '../../logo/personalBrandLogo.svg'; 
import './navBar.css';
const NavBar = () => {
    return (
        <div className = 'mainNavBar'> 
           <a className = 'homeLink' href = '#'>  
             <Panda className = "logo" /> 
           </a>
                <h2 className='name'> {`<Luis Payan/>`} </h2> 
        </div> 
    )
}; 

export default NavBar;