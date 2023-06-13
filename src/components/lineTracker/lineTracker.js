import React, { useState, useEffect } from 'react';
import './lineTracker.css'
const LineTracker = () => { 
    const [numberList, setNumberList] = useState([]) 
    useEffect(() => { 
        let numsArr = [];
        let start = 1
        while(start < 101){ 
            numsArr.push(start++); 
        }
        setNumberList(numsArr); 
    },[]); 

    return ( 
        <div className = 'numberContainer'>
            {numberList.map(number => (
            <p className = 'number'>{number}</p>
            ))}
        </div>
    ); 
}

export default LineTracker; 