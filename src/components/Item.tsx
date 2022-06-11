import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import React, { useEffect } from 'react';

const Item = (props: any) => {
  useEffect(() => {
    console.log("debugging");
  }, [props])

    return <ListItem disablePadding>
    <ListItemButton disableTouchRipple style={{cursor: "default"}}>
        <ListItemText primary={`${props.index + 1}. ${props.todo.title}`} />
        <Tooltip title="Modify">
          <IconButton color="primary" onClick={() => props.openEditForm(props.todo)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="secondary" onClick={() => props.delete(props.todo.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={props.todo.completed ? "mark as incomplete": "mark as complete"}>
          <ListItemIcon>
            <Checkbox
              checked={!!props.todo.completed}
              onClick={() => props.update({ ...props.todo, completed: !props.todo.completed })}
            />
          </ListItemIcon>
        </Tooltip>
    </ListItemButton>
</ListItem>
};

export default React.memo(Item);