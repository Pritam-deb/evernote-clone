import React, { useState } from 'react';
//import firebase from './firebase/config'
//import logo from './logo.svg';
import './App.css';
import projectFirestore from './firebase/config';
import {Button} from '@material-ui/core';
import firebase from 'firebase/app';
import EditorComponent from './editor/editor';
import SidebarComponent from './sidebar/sidebar';

function App() {
  //const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);
  //const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const componentDidMount= ()=>{
    firebase.firestore().collection('notes').onSnapshot(
      serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        setNotes(notes);
      }
    );
  }


  return (
    <div className="App">
        <EditorComponent></EditorComponent>  
        <SidebarComponent></SidebarComponent>
        <Button onClick={componentDidMount}>test</Button>
    </div>
  );
}

export default App;
