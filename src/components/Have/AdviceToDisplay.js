import React from 'react';
import './AdviceToDisplay.css';
import Delete from "/Users/dallinfawcett/devmtn/projects/no-data-base/src/components/Need/Delete.js"
import Modify from '/Users/dallinfawcett/devmtn/projects/no-data-base/src/components/Need/Modify.js'
export default function AdviceToDisplay(props){

    return(
        <div className = "displayBox">
            <div>
            Topic: {props.advice.topic} 
            </div>
            Value: {props.advice.text}
            <Delete result={props.advice.id}/>
            <Modify/>
        </div>
    
    )
}