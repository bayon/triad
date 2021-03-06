import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
//import List from './components/List';
//var bodyParser = require('body-parser');
//urlencoded 
//var urlencoded = bodyParser.urlencoded({extended: false});

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      //todoData: [],
      title: 'Triad',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount() {
    fetch('http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/',{mode: 'cors'})
    .then(results => {
      return results.json();
       
    }).then(data => {
      
      this.setState({datas: data.todos});
      //console.log("data.todos", data.todos);
    })

    this.refs.item.focus();
  }
   
fSubmit = (e) => {
  e.preventDefault();  
  //instantiate local vars with state vars.
  //instantiate local vars with 'refs' attributes from inputs.
  let datas = this.state.datas;
  let item = this.refs.item.value;
  let _id = this.refs._id.value;
  let __v = 0;
  /*console.log('on submit');
  console.log('this state datas',datas);
  console.log(typeof datas);
  console.log('the item');
  console.log(item);*/

  if(this.state.act === 0){ 
    //new record
    let data = {
      _id : _id,
      item: item,
      __v : __v
    }
    datas.push(data);
    console.log('the data is this before the post:',data);
    ///////////////
    //http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/
    fetch('http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/', {
      method: 'post',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: {
       "item": data.item
       
      }
     }).then( function(data){
       console.log(data);
     });
    
   
   
    /////////////
  }else{ 
    //update record
    let index = this.state.index;
    datas[index].item = item;
    
  }
  // set state to changed values and reset the type of action back to default 'new'.
  this.setState({
    datas:datas,
    act: 0
  });

  this.refs.myForm.reset();
  this.refs.item.focus();
}

fRemove = (i) => {
  // parameter i gets sent in via 'onclick' event in the input. ie.
  // onClick = {()=>this.fEdit(i)}
  //instantiate local array with current state
  let datas = this.state.datas;
  //remove item at index i
  datas.splice(i,1);
  //then restore state with altered data.
  this.setState({
    datas:datas
  });
  //reset() is a method of react forms
  this.refs.myForm.reset();
  //set forcus back to 'name' field.
  this.refs.item.focus();

}

fEdit = (i) => {
  // parameter i gets sent in via 'onclick' event in the input. ie.
  // onClick = {()=>this.fEdit(i)}
  // set local var data to state array datas at index i.
  let data = this.state.datas[i];
  //apply values sent in by 'refs' to the data object at i.
  this.refs.item.value = data.item;
  
  //set 'action' to 1 for 'updating' and index to current i,
  // so that when the form 'submits' it will handle as an 'update'.
  this.setState({
    act:1,
    index: i
  })

  this.refs.item.focus();
}

  
render() {
  //instantiate local data from state data inside the render function.
  // use the 'ref' attributes for values, an 'onclick' event to call method.
  //*note how used differently on the 'add' form, and the list item actions.
  //use the map function to fill the list items
  let datas = this.state.datas;
  console.log(datas);
  return (
    <div className="App">
       <h2>{this.state.title}</h2>
       <ul>
         <li>start server: ssh -i "bayon_aws_2019.pem" ubuntu@ec2-3-85-215-230.compute-1.amazonaws.com</li>
         <li> leave it running: 1)  ctrl+z  2) $ bg %1  3) $ exit</li>
         <li>currently: works remotely, but locally does not post data to mongodb on mlab.</li>
         <li>next</li>
       </ul>
       <form ref='myForm' className='myForm'>
        <input type="hidden" ref="_id"  placeholder="id" className="formField" /> 
          <input type="text" ref="item"  placeholder="your item" className="formField" />
          <input type="hidden" ref="__v"  placeholder="id" className="formField" /> 
          <button onClick={this.fSubmit} className="myButton">submit</button>
       </form>

       <pre>
         {datas.map((data,i) => 
            <li key={i} className="myList">
              {i+1}. {data.item}  
              <button onClick = {()=>this.fRemove(i)} className="myListButton">remove</button>
              <button onClick = {()=>this.fEdit(i)} className="myListButton">edit</button>

            </li>
         )}
       </pre>
    </div>
  );
}
}

export default App;
