import React, {Component} from 'react';
import axios from 'axios';
import AdviceToDisplay from './AdviceToDisplay'

  export default class App extends Component {
    constructor(props) {
      super(props)
          this.state = {
              topic:"",
              text:"",
              addedNewAdvice: []

          };
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
        

    
       
        render() {
            {
                var createdAdvice = this.state.addedNewAdvice.map((newAdvice,i) =>{
                return <AdviceToDisplay key = {i} advice ={newAdvice}/>
                })
            }
        return (
            <div>
              Give Advice
              Topic<input onChange ={(e)=>this.setState({topic:e.target.value})}/>
              Advice<input onChange ={(e)=> this.setState({text:e.target.value})}/>
              <button onClick ={() => this.addAdvice()}>Go</button>
             {createdAdvice}
              </div>
              
            
          );
        }
      }
     