import React from 'react';
import './searchDisplay.css';
import Delete from './Delete.js'
import Modify from './Modify.js'
export default function SearchDisplay(props){

    console.log(props);
    return(
        <div className = "searchDisplayBox">
            <div>
           Topic: {props.result.topic} 
                
           </div>
            Advice: {props.result.text} 
           <div className= "buttons">
           <Delete resultId = {props.result.id} updateResults = {props.updateResults}/><Modify result ={props.result} updateResults = {props.updateResults}/>
           </div>
           
        </div>
    
    )
}