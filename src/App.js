import React from 'react'
import './App.css'

import Comment from './components/Comment'


function App() {
  return (
    <div className="App">
      <h1>My first project ReactJS</h1>
      <Comment name="John" mail="john@gmail.com" >
        Olá eu sou a mensagem.
      </Comment>
    </div>
  );
}

export default App
