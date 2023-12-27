import React from "react"
import "./Note.css"

function Note(props){// now the delete function should trigger a function inside app.js , which will delete the item selected , to do this we will use the props

    function handleClick(){
        props.onDelete(props.id)
    }
    return <div className="note">
        <h3 className="note-title"> {props.title}</h3>
        <p className="note-content">{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
    </div>
}

export default Note