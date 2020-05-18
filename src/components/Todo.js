import React,{useState} from 'react';
import '../css/todo.css'
export default class Todo extends React.Component {

    constructor(props){
      super(props);
      this.state={
        pos: 0,
        index: '',
        message: []
      }
    } 
  
    componentDidMount(){
      this.refs.head.focus();
    }
  
    submit = (e) =>{
      e.preventDefault();
  
      let message = this.state.message;
      let heading = this.refs.head.value;
      let description = this.refs.des.value;
  
      if(this.state.pos === 0){  
        let msg = {
          heading, description
        }
        message.push(msg);
      }else{                      
        let index = this.state.index;
        message[index].heading = heading;
        message[index].description = description;
      }    
  
      this.setState({
        message: message,
        pos: 0
      });
  
      this.refs.Form.reset();
      this.refs.head.focus();
    }
  
    delete = (i) => {
      let msg = this.state.message;
      msg.splice(i,1);
      this.setState({
        message: msg
      });
  
      this.refs.Form.reset();
      this.refs.head.focus();
    }
  
    edit = (i)=>{
      let msg = this.state.message[i];
      this.refs.head.value = msg.heading;
      this.refs.des.value = msg.description;
  
      this.setState({
        pos: 1,
        index: i
      });
      console.log(i);
      this.refs.head.focus();
    }  
  
    render() {
      let message = this.state.message;
      return (
        <>
        <div className="todo-input">
          <h2>Todo list</h2>
          <form ref="Form" className="form">
            <input type="text" ref="head" placeholder="enter a heading"  className="form-fields" />
            <br/><input type="text" ref="des" placeholder="enter a description" className="form-fields"  />
            <br/><button className="button" onClick={(e)=>this.submit(e)} >submit </button>
          </form>
          </div>
          <div className="todo-display">
          <h4>Todo display</h4>
            {message.map((msg, i) =>
              <li key={i} className="myList">
            
                <div>
                    <li><pre>title:{msg.heading}<br/></pre></li>
                
                <li><pre>description:{msg.description}</pre></li>
                </div>
                <button className=" button " onClick={()=>this.delete(i)} >delete </button>
                <button className="button " onClick={()=>this.edit(i)} >Edit </button>
              </li>
            )}
          </div>
        </>
      );
    }
  }
  
  