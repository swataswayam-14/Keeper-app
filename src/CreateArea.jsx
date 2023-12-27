import React from "react";
import "./CreateArea.css"

function CreateArea(props){

    const [note , setNote] = React.useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name , value} = event.target 
        setNote(prevNote =>{
            return{
                ...prevNote, // spread operator that spreads all the key value pairs that is currently present in the notes array and adds it to the final object
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note) // calling the onAdd() from the props is equivalent in calling the addNote() function from the App.js
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    return(
        <div>
            <form>
                <input className ="input-title" name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
                <textarea className="input-content" name="content" onChange = {handleChange} value ={note.content} placeholder="Take a note..." rows="3"/>
                <button className="submit-button" onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea