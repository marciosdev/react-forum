import React from 'react'
import './Comment.css'

const Comment = props => (
    <>
        <div className="Comment">
            <h2>{props.name}</h2>
            <p>{props.mail}</p>
            <p>{props.children}</p>
           
        </div>
    </>
);

export default Comment;