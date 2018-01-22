import React, {Component} from 'react'
import axios from 'axios';
export default class Delete extends Component{
    constructor(props){
        super(props);
       
        

    }

    delete(){
        axios.delete(`/api/advice/${this.props.resultId}`).then(response=>{
        this.props.updateResults(response.data)
        })
    }
    render(){
        
        
        
        return(
            <button onClick ={()=>this.delete()}>Delete</button>

            
            
        )
    }
}