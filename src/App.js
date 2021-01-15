import React, { Component } from 'react'
import './App.css'

import Comment from './components/Comment'


class App extends Component {
  
  state = {
    comment: [
      {
        name: 'John',
        mail: 'john@gmail.com',
        message: 'Hello John'
      },
      {
        name: 'Mary',
        mail: 'Mary@gmail.com',
        message: 'Hello Mary'
      }
    ]
  }
  
  render(){
    return (
      <div className="App">
        <h1>My first project ReactJS</h1>

        {
          this.state.comment.map((comment, indice )=> (
            <Comment key={indice} name={comment.name} mail={comment.mail} >
              {comment.message}
            </Comment>

          ) )
        }
        
      </div>
    );
  }
}

export default App
