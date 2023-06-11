import React, {useState, useEffect } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {ReactComponent as Github} from '../../assets/github.svg'; 
import {ReactComponent as LinkedIn} from '../../assets/linkedIn.svg'; 
import {ReactComponent as Instagram} from '../../assets/instagram.svg'; 

import './navBar.css';


const NavBar = () => {
    const [text, setText] = useState('');
    const [fullText, setfullText] = useState('<Luis Payan/>');
    const [index,setIndex] = useState(0);
    //
    
    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 400)
        }
      }, [index]);

    //
    return (
        <div className = 'mainNavBar'> 
           <div className = 'name'> 
           <p className ='text'>
           <span style ={{color:'#CBBEC2'}}>{`{`}</span>
           <span style ={{color:'#E4B781'}}>name</span>
           <span style ={{color:'#DF769B'}}>: </span>
           <span style ={{color:'#D67E5C'}} >Luis Payan</span>
           <span style ={{color:'#CBBEC2'}}>{`}`}</span>
           </p>
            </div>
            <div className = 'socialsContainer'> 
                <a href = 'https://github.com/lapayan'>
                    <Github className='github' />
                </a>
                <a href = 'https://www.linkedin.com/in/luis-payan-6814b1243/'>
                    <LinkedIn className='linkedIn'/>
                </a>
                <a href ='https://www.instagram.com/pikapi293/'>
                    <Instagram className='instagram'/>
                </a>
            </div>
        </div> 
    )
    //
}; 

export default NavBar;
