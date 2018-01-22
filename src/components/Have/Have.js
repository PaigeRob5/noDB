import React, {Component} from 'react';
import axios from 'axios';
import AdviceToDisplay from './AdviceToDisplay'
import './Have.css'

  export default class App extends Component {
    constructor(props) {
      super(props)
          this.state = {
              topic:"",
              text:"",
              addedNewAdvice: []

          };
          this.updateAddedNewAdvice = this.updateAddedNewAdvice.bind(this);
          this.resetButton = this.resetButton.bind(this);
        }

        addAdvice(){
            let newAdvice ={
                topic: this.state.topic,
                text: this.state.text
              };
              axios.post(`/api/advice`, newAdvice).then(response =>{
                this.setState({addedNewAdvice: response.data});
              })
              
              console.log(this.state.addedNewAdvice);
        }

        updateAddedNewAdvice(newResults){
            this.setState({addedNewAdvice:newResults})
        }
        resetButton(){
            this.setState({addedNewAdvice:[]})
        }

        

    
       
        render() {
            {
                var createdAdvice = this.state.addedNewAdvice.map((newAdvice,i) =>{
                return <AdviceToDisplay key = {i} advice ={newAdvice} updateResults ={this.updateAddedNewAdvice}/>
                })
            }
        return (
            <div className = "main">
              <header>Give Advice:</header>
            
              <div className = "subTopic">What is the topic of your advice?</div><input defaultValue = "Topic"onChange ={(e)=>this.setState({topic:e.target.value})}/>
              <div className ="subTopic">What is the advice you'd like to share?</div><input defaultValue = "Advice"onChange ={(e)=> this.setState({text:e.target.value})}/>
              <button onClick ={() => this.addAdvice()}>Go</button>
              <button onClick = {() => this.resetButton()}>Reset</button>
             {createdAdvice}
              </div>
              
            
          );
        }
      }
     