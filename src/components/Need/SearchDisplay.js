import React from 'react';
import './searchDisplay.css';
import Delete from './Delete.js'
import Modify from './Modify.js'
export default function SearchDisplay(props){

    return(
        <div className = "searchDisplayBox">
           Topic: {props.result.topic} Advice: {props.result.text} 
           <Delete/>
           <Modify/>
           
        </div>
    
    )
}