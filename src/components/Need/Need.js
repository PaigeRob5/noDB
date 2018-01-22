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
          this.updateSearchResults = this.updateSearchResults.bind(this)
          this.resetButton = this.resetButton.bind(this)
        }
    

        search(){
          const{topicSearched}=this.state;
          

          axios.get(`/api/advice?topic=${topicSearched}`).then(response =>{
            console.log(response.data);
              this.setState({searchResults: response.data})
          }).catch(console.log);
        }
        updateSearchResults(newResults){
          this.setState({searchResults:newResults})
        }
        resetButton(){
          this.setState({searchResults:[]})
        }
       
       
        render() {
          var searchResultsToDisplay = this.state.searchResults.map((result,i) =>{
            return <SearchDisplay key={i} result={result} updateResults = {this.updateSearchResults}/>
                  
          })
    
          
        return (
              <div>
              <div>Ask for Advice:</div>
              <input defaultValue ="search a topic or just press go to see all advice"onChange ={(e) => this.setState({topicSearched: e.target.value})}/>
              <button onClick ={()=>this.search()}>Go</button>
              <button onClick ={this.resetButton}>Reset</button>
              {searchResultsToDisplay}
              
              </div>
              
            
          );
        }
      }
     