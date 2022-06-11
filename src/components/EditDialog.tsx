import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const EditDialog = (props: any) => {

  return (
    <div>
      <Dialog open={props.open} onClose={() => props.setOpen(false)}>
        <DialogTitle>Edit Todo Title</DialogTitle>
        <DialogContent className='d-flex flex-column'>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit Todo Title"
            variant="standard"
            value={props.todo?.title}
            onChange={(e) => props.setTodo((prev: any) => ({ ...props.todo, title: e.target.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Cancel</Button>
          <Button onClick={() => {props.save(); props.setOpen(false)}}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog;
