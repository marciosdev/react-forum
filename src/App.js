import React, { Component } from 'react'
import './App.css'

import Comments from './components/Comment'


class App extends Component {
  
  state = {
    comments: [
      {
        name: 'John',
        mail: 'john@gmail.com',
        message: 'Hello John'
      },
      {
        name: 'Mary',
        mail: 'Mary@gmail.com',
        message: 'Hello Mary'
      },
      {
        name: 'Celina',
        mail: 'Celina@gmail.com',
        message: 'Hello Celina'
      }
    ]
  }

  newComment = ()  => {
    const newComment = {
      name: 'Sidya',
      mail: 'Sidya@gmail.com',
      message: 'Hi dear'
    }
    
    this.setState({ comments: [...this.state.comments, newComment] })

  }
  
  render(){
    return (
      <div className="App">
        <h1>My ReactJS Forum</h1>

        {
          this.state.comments.map((comment, indice)=> (
            <Comments key={indice} name={comment.name} mail={comment.mail} >
              {comment.message}
            </Comments>

          ) )
        }
      <button onClick={this.newComment}>Add comment</button>  
      </div>
    );
  }
}

export default App
