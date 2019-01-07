import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {

  constructor () {
    super()
    this.state = {
      snipData: [],
    }
  }

  componentDidMount() {
    fetch('http://www.forteworks.com/api/simple-api.php/snips/javascript')
    .then(results => {
      return results.json();
       
    }).then(data => {
      console.log(data);
      
      let snipData = data.map((snip) => {
        return(
          <li key={snip.id} className="collection-item" >
            
            <div className="list-item-text">{snip.desc}</div>
            <div className="list-item-snip"><span dangerouslySetInnerHTML={{__html: unescape(snip.snip)}} /></div>
            
            
          </li>
        )
      })
      this.setState({snipData: snipData});
      
      console.log("state", this.state.snipData);
    })
  }
   
  
  render() {
     
    return (
      <div className="App">
        
        <List listHeader="snips" listData={this.state.snipData}></List>

      </div>
    );
  }
}

export default App;
