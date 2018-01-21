import React, {Component} from 'react';
import axios from 'axios';
import SearchDisplay from './SearchDisplay';


  export default class Need extends Component {
    constructor(props) {
      super(props)
          this.state = {
            topicSearched: "",
            searchResults:[] 
          };
        }

        search(){
          const{topicSearched}=this.state;
          

          axios.get(`/api/advice?topic=${topicSearched}`).then(response =>{
              this.setState({searchResults: response.data})
          }).catch(console.log);
        }
       
        render() {
          var searchResultsToDisplay = this.state.searchResults.map((result,i) =>{
            return <SearchDisplay key={i} result={result} />
                  
          })
         
          
        return (
              <div>
              Get Advice<input onChange ={(e) => this.setState({topicSearched: e.target.value})}/>
              <button onClick ={()=>this.search()}/>
              {searchResultsToDisplay}
              </div>
              
            
          );
        }
      }
     