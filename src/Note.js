import React from "react"
import "./Note.css"

function Note(props){
    return <div className="note">
        <h3 className="note-title"> {props.title}</h3>
        <p className="note-content">{props.content}</p>
    </div>
}

export default Note