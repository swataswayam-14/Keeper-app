//Header
//Footer
//Note
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import "./App.css"
import notes from "./notes";

function App(){
  return<div>
    <Header/>
    {notes.map(function(note){
      return <div>
        <Note
        title = {note.title}
        content = {note.content}
      />
      </div>
      
    })}
    <Footer/>
  </div>
}

export default App