import { connect } from "react-redux";
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { getAllTodos, updateTodo, deleteTodo } from '../store/actions/todoAction';
import { useCallback, useEffect, useState } from "react";
import EditDialog from "./EditDialog";
import Item from './Item';
import ItemHeader from "./ItemHeader";

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
      setDisplayTodos(() => todos);
    }, [props.todos]);

    useEffect(() => {
      setDisplayTodos(() => searchText 
      ? props.todos.filter((todo: any) => todo.title.toLowerCase().includes(searchText.toLowerCase())) 
      : props.todos);
    }, [searchText]);

    useEffect(() => {
      if(searchByStatus === 1) {
        setDisplayTodos(() => props.todos);
      }
      if(searchByStatus === 2) {
        setDisplayTodos(() => props.todos.filter((todo: any) => !todo.completed));
      }
      if(searchByStatus === 3) {
        setDisplayTodos(() => props.todos.filter((todo: any) => todo.completed));
      }
    }, [searchByStatus]);

    const openEditForm = useCallback((todo: any) => {
      setEditableTodo({ ...todo });
      setEditFormVisibility(true);
    }, []);

    const saveEditedTodo = useCallback(() => {
      props.update(editableTodo);
    }, [editableTodo]);

    return <Paper elevation={3} className="my-4">
        <EditDialog open={editFormVisibility} setOpen={setEditFormVisibility} todo={editableTodo} setTodo={setEditableTodo} save={saveEditedTodo} />
        <ItemHeader searchText={searchText} setSearchText={setSearchText} searchByStatus={searchByStatus} setSearchByStatus={setSearchByStatus} />
        <List>
            {props.todos && displayTodos.map((todo: any, index: number) => (
              <Item todo={todo} key={todo.id} index={index} openEditForm={openEditForm} update={props.update} delete={props.delete}/>
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