import { applyMiddleware, combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todoReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const store = createStore(
    combineReducers({
        todo: todoReducer,
    }),
    {},
    applyMiddleware(thunk, promise)
);

export default store;
