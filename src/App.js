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
      },
      {
        name: 'Celina',
        mail: 'Celina@gmail.com',
        message: 'Hello Celina'
      }
    ]
  }

  adicionarComentario = ()  => {
    const novoComentario = {
      name: 'Sidya',
      mail: 'Sidya@gmail.com',
      message: 'Hi dear'
    }
    
    this.setState({ comment: [...this.state.comment, novoComentario] })

  }
  
  render(){
    return (
      <div className="App">
        <h1>My ReactJS Forum</h1>

        {
          this.state.comment.map((comment, indice)=> (
            <Comment key={indice} name={comment.name} mail={comment.mail} >
              {comment.message}
            </Comment>

          ) )
        }
      <button onClick={this.adicionarComentario}>Comentar</button>  
      </div>
    );
  }
}

export default App
