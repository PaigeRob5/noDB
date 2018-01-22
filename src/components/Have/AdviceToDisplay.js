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
            <div>
            Advice: {props.advice.text}
            </div>
            <Delete resultId={props.advice.id} updateResults = {props.updateResults}/>
            <Modify result ={props.advice} updateResults = {props.updateResults}/>
        </div>
    
    )
}