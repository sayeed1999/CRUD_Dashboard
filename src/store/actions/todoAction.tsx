import axios from "axios";
export const getAllTodos = () => {
    return async (dispatch: any) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: 'GET_ALL_TODOS',
            payload: res.data,
        });
    }
}

export const createTodo = (todo: any) => {
    return async (dispatch: any) => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
        dispatch({
            type: 'CREATE_TODO',
            payload: res.data,
        });
    }
}

export const updateTodo = (todo: any) => {
    return async (dispatch: any) => {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        dispatch({
            type: 'UPDATE_TODO',
            payload: res.data,
        });
    }
}

export const deleteTodo = (id: number) => {
    return async (dispatch: any) => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        dispatch({
            type: 'DELETE_TODO',
            payload: id,
        });
    }
}