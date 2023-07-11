import './ToDo.css'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import {TbWriting} from 'react-icons/tb'
import "./ToDo.css"



    
export default function CheckboxListSecondary() {
      const [checked, setChecked] = React.useState([1]);
    
      const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      };
    
      return (
        <List className="list" dense sx={{ width: '300%', maxWidth: 500, bgcolor: 'background.paper' }} >
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    
                     < TbWriting size="35px"/>
                    
                  </ListItemAvatar>
                  <input type="text" ></input>
                  <ListItemText id={labelId}  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      );
    }
    
  




