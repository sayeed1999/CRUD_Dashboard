
import { connect } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { getAllTodos, updateTodo, deleteTodo } from '../store/actions/todoAction';
import { useEffect } from "react";

const Items = (props: any) => {

    useEffect(() => {
      props.getAll();
    }, []);

    return <Paper elevation={3} className="my-4">
        <List>
        {props?.todos?.map((todo: any, index: number) => (
            <ListItem disablePadding key={todo.id}>
                <ListItemButton disableTouchRipple style={{cursor: "default"}}>
                    <ListItemText primary={`${index + 1}. ${todo.title}`} />
                    <Tooltip title="Modify">
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="secondary" onClick={() => props.delete(todo.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <ListItemIcon>
                        <Checkbox
                          checked={!!todo.completed}
                        />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Paper>;
};

const mapStateToProps = (state: any) => {
    return {
        todos: state.todo.todos,
    };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getAll: () => dispatch(getAllTodos()),
      update: () => dispatch(updateTodo({})),
      delete: (id: number) => dispatch(deleteTodo(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Items);