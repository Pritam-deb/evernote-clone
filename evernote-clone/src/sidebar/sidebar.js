import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

function SidebarComponent(props) {
      const [addingNote, setAddingNote] = useState(false);
      const [title, setTitle] = useState(null);

      const newNoteBtnClick = () => {
            console.log('New button clicked');
      }



      const notes = props;
      const classes = props;
      const selectedNoteIndex = props;

    return (
            <div className={classes.sidebarContainer}>
                  <Button 
                        onClick={newNoteBtnClick}
                        className={classes.newNoteBtn}>New Note</Button>
            </div>
      );
}

export default SidebarComponent;