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

        

    
       
        render() {
            {
                var createdAdvice = this.state.addedNewAdvice.map((newAdvice,i) =>{
                return <AdviceToDisplay key = {i} advice ={newAdvice} updateResults ={this.updateAddedNewAdvice}/>
                })
            }
        return (
            <div>
              <header>Give Advice</header>
            
              Topic<input defaultValue = "What is the topic of your advice?"onChange ={(e)=>this.setState({topic:e.target.value})}/>
              Advice<input defaultValue = "What is the advice you'd like to share?"onChange ={(e)=> this.setState({text:e.target.value})}/>
              <button onClick ={() => this.addAdvice()}>Go</button>
             {createdAdvice}
              </div>
              
            
          );
        }
      }
     