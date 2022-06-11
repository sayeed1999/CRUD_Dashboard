const appState: any = {
    todos: [],
};

const todoReducer = (state: any = appState, action: any): any => {

  switch(action.type) {
    case 'GET_ALL_TODOS': {
      let temp: any[] = [];
      action.payload.forEach((todo: any) => {
        temp.unshift(todo);
      })
      state = {
        ...state,
        todos: temp,
      }
      break;
    }
    case 'CREATE_TODO': {
      state = {
        ...state,
        todos: [
          action.payload,
          ...state.todos
        ]
      }
      break;
    }
    case 'UPDATE_TODO': {
      break;
    }
    case 'DELETE_TODO': {
      state = {
        ...state,
        todos: state.todos.filter((x: any) => x.id !== action.payload),
      }
      break;
    }
  }

  return state;
};

export default todoReducer;