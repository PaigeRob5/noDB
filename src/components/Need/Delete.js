import React, {Component} from 'react'
import axios from 'axios';
export default class Delete extends Component{
    constructor(props){
        super(props);
        this.state ={
            idToDelete:'',
            remainingAdvice:[]
        }

    }
    componentWillMount(){
        this.setState({idToDelete:this.props.result})
    }
    delete(){
        const{idToDelete}=this.state;
        console.log({idToDelete})
        axios.delete(`/api/advice/${idToDelete}`).then(response=>{
        this.props.updateResults(response.data)
        })
    }
    render(){
        
        
        
        return(
            <button onClick ={()=>this.delete()}>Delete</button>

            
            
        )
    }
}