import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/actions/todoAction';

const NewItem = (props: any) => {
    const [todoTitle, setTodoTitle] = useState('');

    return <div className="row my-4">
        <div className="col-9 col-md-6">
            <div className='d-flex align-items-end'>
                <TextField id="filled-basic" label="New Todo here.." variant="filled" className='flex-grow-1' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}/>
                <span className='px-2'></span>
                <Button variant="contained" size="medium" onClick={() => props.create(todoTitle)}>New</Button>
            </div>
        </div>
    </div>;
};

function mapDispatchToProps(dispatch: any) {
    return {
        create: (text: any) => {
            const newTodo: any = {
                id: Math.random() * 1000,
                userId: 1,
                title: text,
                completed: false,
            };
            dispatch(createTodo(newTodo));
        }
    }
}

export default connect(null, mapDispatchToProps)(NewItem);
