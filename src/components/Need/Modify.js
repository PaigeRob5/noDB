import React, {Component} from 'react'
import axios from 'axios';
export default class Modify extends Component{
    constructor(props){
        super(props);
            this.state ={
                id: this.props.result.id,
                topic: this.props.result.topic,
                text: this.props.result.text,
                edited: false,
                updatedAdvice: []
            }

            this.handleClick = this.handleClick.bind(this)
            this.topicInput = this.topicInput.bind(this)
            this.editAdvice = this.editAdvice.bind(this)
            this.adviceInput = this.adviceInput.bind(this)
    }

    editAdvice(){
        let body ={
            topic: this.state.topic,
            text: this.state.text,
        }
        const{id}=this.state;
        console.log(id);
        axios.put(`/api/advice/${id}`,body).then(
            results =>{
                this.props.updateResults(results.data)
            }).catch(console.log);
        this.setState({edited:false});

    }

    handleClick() {
        console.log('fired')
        this.setState({
            edited: true
        })
    }

    topicInput(e){
        this.setState({topic:e.target.value}, ()=> console.log(this.state.topic))
    }
    adviceInput(e){
        this.setState({text:e.target.value})
    }
 

    render(){
        let jsxtoDisplay = this.state.edited ? 
            ( 
                <div>
                    Topic: <input value ={this.state.topic} onChange ={this.topicInput} />
                    Advice: <input value = {this.state.text} onChange ={this.adviceInput} />
                    <button onClick = {this.editAdvice}>Save</button>
              
                </div>
            ):
            (
                <div>
                    <button onClick ={ this.handleClick }>Edit</button>
                </div>
            )
        return(
            <div>
                {jsxtoDisplay}
            </div>
        )    
    
    }
}