import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {

  constructor () {
    super()
    this.state = {
      todoData: [],
    }
  }

  componentDidMount() {
    fetch('http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/',{mode: 'cors'})
    .then(results => {
      return results.json();
       
    }).then(data => {
      //console.log(data);
      //console.log(typeof data);
      
      let todoData = data.todos.map((snip) => {
        return(
          <li key={snip._id} className="collection-item" >
            
            <div className="list-item-text">{snip.item}</div>
            
            
          </li>
        )
      })
      this.setState({todoData: todoData});
      //console.log("state", this.state.todoData);
    })
  }
   
  
  render() {
     
    return (
      <div className="App">
        
        <List listHeader="todos" listData={this.state.todoData}></List>

      </div>
    );
  }
}

export default App;
