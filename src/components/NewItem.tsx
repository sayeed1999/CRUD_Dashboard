import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewItem = () => {
    return <div className="row my-4">
        <div className="col-md-6">
            <div className='d-flex align-items-end'>
                <TextField id="filled-basic" label="New Todo here.." variant="filled" className='flex-grow-1' />
                <span className='px-2'></span>
                <Button variant="contained" size="large">Create New Todo</Button>    
            </div>
        </div>
    </div>;
};

export default NewItem;