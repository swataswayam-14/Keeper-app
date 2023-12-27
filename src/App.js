//Header
//Footer
//Note
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import "./App.css"
//import notes from "./notes";
import CreateArea from "./CreateArea";

function App(){

  const [notes , setNotes] = React.useState([])

  function addNote(newNote){
    setNotes(prevNotes =>{
      return [...prevNotes, newNote]
    })
  }
  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id
      })//this way we will get an array that has everything as in the previous notes other than the ones where the index matches with the id of the note to be deleted
    })
  }

  return<div>
    <Header/>
    
    <CreateArea
      onAdd = {addNote}
    />
    
    {notes.map((noteItem, index) =>{
        return(
        <div className="notes-container">
        <Note
          key = {index}
          id =  {index}
          title = {noteItem.title}
          content = {noteItem.content}
          onDelete = {deleteNote}
        /> 
        </div>
    )
    })}
    <Footer/>
  </div>
}

export default App