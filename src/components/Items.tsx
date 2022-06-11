
import { connect } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { getAllTodos, updateTodo, deleteTodo } from '../store/actions/todoAction';
import { useEffect, useState } from "react";
import EditDialog from "./EditDialog";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Items = (props: any) => {

    const [displayTodos, setDisplayTodos] = useState<any>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [searchByStatus, setSearchByStatus] = useState<number>(1);
    const [editFormVisibility, setEditFormVisibility] = useState<boolean>(false);
    const [editableTodo, setEditableTodo] = useState<{title: string, completed: boolean, id: number, userId: number}>();


    useEffect(() => {
      props.getAll();
    }, []);

    useEffect(() => {
      let todos: any[] = props.todos;
      setDisplayTodos((prev:any[]) => todos);
    }, [props.todos]);

    useEffect(() => {
      setDisplayTodos((prev: any[]) => searchText 
      ? props.todos.filter((todo: any) => todo.title.toLowerCase().includes(searchText.toLowerCase())) 
      : props.todos);
    }, [searchText]);

    useEffect(() => {
      if(searchByStatus === 1) {
        setDisplayTodos((prev: any[]) => props.todos);
      }
      if(searchByStatus === 2) {
        setDisplayTodos((prev: any[]) => props.todos.filter((todo: any) => !todo.completed));
      }
      if(searchByStatus === 3) {
        setDisplayTodos((prev: any[]) => props.todos.filter((todo: any) => todo.completed));
      }
    }, [searchByStatus]);

    const openEditForm = (todo: any) => {
      setEditableTodo({ ...todo });
      setEditFormVisibility(true);
    }

    const saveEditedTodo = () => {
      props.update(editableTodo);
    }

    return <Paper elevation={3} className="my-4">
        <EditDialog open={editFormVisibility} setOpen={setEditFormVisibility} todo={editableTodo} setTodo={setEditableTodo} save={saveEditedTodo} />
        <List>
            <ListItem>
              <TextField variant="filled" size="small" label="Search here.." value={searchText} onChange={(e) => setSearchText((prev: string) => e.target.value)}/>
              <span className="mx-2"></span>
              <Select
                variant="filled"
                size="small"
                label="Show By"
                value={searchByStatus}
                onChange={(e) => setSearchByStatus((prev: number) => +e.target.value)}
              >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Undone</MenuItem>
                <MenuItem value={3}>Done</MenuItem>
              </Select>
            </ListItem>
            {props.todos && displayTodos.map((todo: any, index: number) => (
            <ListItem disablePadding key={todo.id}>
                <ListItemButton disableTouchRipple style={{cursor: "default"}}>
                    <ListItemText primary={`${index + 1}. ${todo.title}`} />
                    <Tooltip title="Modify">
                      <IconButton color="primary" onClick={() => openEditForm(todo)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="secondary" onClick={() => props.delete(todo.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={todo.completed ? "mark as incomplete": "mark as complete"}>
                      <ListItemIcon>
                        <Checkbox
                          checked={!!todo.completed}
                          onClick={() => props.update({ ...todo, completed: !todo.completed })}
                        />
                      </ListItemIcon>
                    </Tooltip>
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
      update: (todo: any) => dispatch(updateTodo(todo)),
      delete: (id: number) => dispatch(deleteTodo(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Items);