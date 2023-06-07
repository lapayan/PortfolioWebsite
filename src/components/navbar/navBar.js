import React from 'react';
import {ReactComponent as Panda} from '../../logo/personalBrandLogo.svg'; 
import './navBar.css';
const name = "<Luis Payan/>";
const NavBar = () => {
    return (
        <div className = 'mainNavBar'> 
           <a className = 'homeLink' href = '#'>  
             <Panda className = "logo" /> 
           </a>
                <h2 className='name'> {name} </h2> 
        </div> 
    )
}; 

export default NavBar;