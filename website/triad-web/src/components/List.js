import React, { Component } from 'react';
import './List.css';

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
        listHeader: this.props.listHeader,
        listData : this.props.listData
    }
  }
 
  componentDidMount() {
    
  }
   
  render() {
     
    return (
      <div className="list ">
         <div className="list-header card-panel">
        <h4>{this.props.listHeader}</h4>
        </div>
       
        <div className="list-container card-panel">
        <ul className="collection">
         {this.props.listData}
         </ul>
        </div>
      </div>
    );
  }
  
}

export default List;

