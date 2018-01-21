import React, {Component} from 'react'
import axios from 'axios';
export default class Delete extends Component{
    constructor(props){
        super(props);
        this.state ={
            idToDelete:''
        }

    }
    delete(id){
        axios.delete(`api/advice/${id}`).then(response=>{
        this.setState({deleteMessage:response.data})
        })
    }
    render(){
        
        return(
            <button onClick ={()=>this.delete()}>Delete</button>
        )
    }
}