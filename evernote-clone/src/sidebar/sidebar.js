import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

function SidebarComponent(props)
{
      const [addingNote, setAddingNote] = useState(false);
      const [title, setTitle] = useState(null);

      const newNoteBtnClick = () => {
            setAddingNote (!(addingNote));
            setTitle (null);
      }

      const { notes, classes, selectedNoteIndex } = props;

      const updateTitle = (txt) => {
            console.log('here it is: ',txt);
      }

      

      return (
            <div className={classes.sidebarContainer}>
                  <Button 
                        onClick={newNoteBtnClick}
                        className={classes.newNoteBtn}>{addingNote ? 'Cancel' : 'New Note'}</Button>
                  {
                        addingNote ? 
                        <div>
                              <input type = 'text'
                              className = {classes.newNoteInput}
                              placeholder = 'Enter note title'
                              onKeyUp={(e)=>updateTitle(e.target.value)}>
                              </input>
                        </div> : 
                              null
                  }
            </div>
      );
}

export default withStyles(styles) (SidebarComponent);