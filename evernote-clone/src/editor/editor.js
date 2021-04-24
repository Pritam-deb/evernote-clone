
import React, {useState, useRef, useEffect} from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function EditorComponent(props) {
      const [text, setText] = useState('');
      const [title, setTitle] = useState('');
      const [id, setId] = useState('');
      const classes = props;


      // const updateBody = async(val)=>{
      //       await setText(val);
      //       update();
      // };


      const updateBody = (val) => {
            props.noteUpdate(id, {
              title: title,
              body: val
            });
        
            setText(val);
      };
        
      const debounce = (func, delay) => {
            let timer;
        
            return (...args) => {
              clearTimeout(timer);
              timer = setTimeout(() => func.apply(null, args), delay);
            };
      };

      // const update = useRef(
	// 	debounce(() => {
	// 		props.noteUpdate(id,{
      //                   title:title,
      //                   body:text,
      //             })
      //             //console.log(props.selectedNote.body);
	// 	}, 1500)
      // ).current

      useEffect(()=>{
            setText(props.selectedNote.body);
            setTitle(props.selectedNote.title);
            setId(props.selectedNote.id);
      },[])

 

      useEffect(()=>{
            if(props.selectedNote.id !== id) {
            setText(props.selectedNote.body);
            setTitle(props.selectedNote.title);
            setId(props.selectedNote.id);
            }
      },[])

    return (
        
            <div className={classes.editorContainer}>
                  <ReactQuill
                        value = {text}
                        onChange={debounce(updateBody, 1500)}>

                  </ReactQuill>
            </div>
      );
}

export default withStyles(styles) (EditorComponent) ;