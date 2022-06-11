const appState: any = {
    todos: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": true
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          }
    ],
};

const rootReducer = (state: any = appState, action: any): any => {
    return appState;
};

export default rootReducer;