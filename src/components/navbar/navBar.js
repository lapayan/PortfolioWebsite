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
                <TypeWriterEffect
                startDelay={100}
                cursorColor="black"
                text='{name: Luis Payan}'
                typeSpeed={80}
                eraseSpeed={100}
                />
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