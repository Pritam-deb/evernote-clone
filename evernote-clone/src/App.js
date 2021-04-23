import React, { useEffect, useState } from 'react';
//import firebase from './firebase/config'
//import logo from './logo.svg';
import './App.css';
import projectFirestore from './firebase/config';
import {Button, withStyles} from '@material-ui/core';
import firebase from 'firebase/app';
import EditorComponent from './editor/editor';
import SidebarComponent from './sidebar/sidebar';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  useEffect(()=>{
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        setNotes(notes);
      })
  },[])

  const selectNote = (note, index) => {
    setSelectedNote(note);
    setSelectedNoteIndex(index);
  }

  const noteUpdate = (id, noteObj) => {
    console.log(id, noteObj);
  }


  return (
    <div className="App">
      
        <SidebarComponent 
            selectedNoteIndex = {selectedNoteIndex}
            notes = {notes}
            // deleteNote={this.deleteNote}
            selectNote = {selectNote}
            // newNote={this.newNote}
            >
        </SidebarComponent>
        {
        selectedNote ? 
          <EditorComponent 
          key = {selectedNoteIndex}
          selectedNote={selectedNote}
          selectedNoteIndex={selectedNoteIndex}
          notes = {notes}
          noteUpdate={noteUpdate}></EditorComponent>  :
        null
        }
        
        
    </div>
  );


  // const componentDidMount = () => {
  //   firebase
  //     .firestore()
  //     .collection('notes')
  //     .onSnapshot(serverUpdate => {
  //       const notes = serverUpdate.docs.map(_doc => {
  //         const data = _doc.data();
  //         data['id'] = _doc.id;
  //         return data;
  //       });
  //       console.log(notes);
  //       this.setState({ notes: notes });
  //     });
  // }
}

export default App;
