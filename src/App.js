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
    ],
    newComment: {
      name: '',
      mail: '',
      message: ''
    }
  }

  newComment = event  => {

    event.preventDefault();

    const newComment = {...this.state.newComment}
    
    this.setState({ comments: [...this.state.comments, newComment], newComment: { name : '', mail: '', message : ''}  })

  }

  deleteComment = comment => {
    let list = this.state.comments;
    list = list.filter(c => c !== comment)

    this.setState({comments: list})
  }

  inputValue = event => {
    const { name, value } = event.target
    this.setState({ newComment: {...this.state.newComment, [name]: value}})
  }


  render(){
    return (
      <div className="App">
        <h1>My ReactJS Forum</h1>

        {
          this.state.comments.map((comment, indice)=> (
            <Comments key={indice} name={comment.name} mail={comment.mail} onRemove={this.deleteComment.bind(this, comment)} >
              {comment.message}
            </Comments>

          ))
        }
      
        <form method="post" onSubmit={this.newComment}>
          <h2>New comment</h2>
          <div>
            <input type="text" name="name" value={this.state.newComment.name} onChange={this.inputValue} placeholder="Enter you name" />
          </div>
          <div>
            <input type="text" name="mail" value={this.state.newComment.mail} onChange={this.inputValue} placeholder="Enter you mail" />
          </div>
          <div>
            <textarea type="textarea" name="message" value={this.state.newComment.message} onChange={this.inputValue} rows="4" placeholder="Enter your comment" />
          </div>
          <button type="submit">Add comment</button>
        </form>


      </div>
    );
  }
}

export default App
