import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewItem = () => {
    return <div className="row my-4">
        <div className="col-md-6">
            <div className='d-flex align-items-end'>
                <TextField id="filled-basic" label="New Todo" variant="filled" className='flex-grow-1' />
                <span className='px-2'></span>
                <Button variant="contained" size="large">Contained</Button>    
            </div>
        </div>
    </div>;
};

export default NewItem;