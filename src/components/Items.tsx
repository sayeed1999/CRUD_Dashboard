
import { connect } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

const Items = (props: any) => {
    return <Paper elevation={3} className="my-4">
        <List>
        {props.todos.map((todo: any) => (
            <ListItem disablePadding key={todo.id}>
                <ListItemButton>
                    <ListItemText primary={`${todo.id}. ${todo.title}`} />
                    <ListItemIcon>
                        <Checkbox
                          checked={!!todo.completed}
                          disableRipple
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
        todos: state.todos
    };
}

export default connect(mapStateToProps)(Items);