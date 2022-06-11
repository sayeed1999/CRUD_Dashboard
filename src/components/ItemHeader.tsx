import ListItem from '@mui/material/ListItem';
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from "@mui/material";


const ItemHeader = (props: any) => {
    return <ListItem>
    <TextField variant="filled" size="small" label="Search here.." value={props.searchText} onChange={(e) => props.setSearchText((prev: string) => e.target.value)}/>
    <span className="mx-2"></span>
    <Select
      variant="filled"
      size="small"
      label="Show By"
      value={props.searchByStatus}
      onChange={(e) => props.setSearchByStatus((prev: number) => +e.target.value)}
    >
      <MenuItem value={1}>All</MenuItem>
      <MenuItem value={2}>Undone</MenuItem>
      <MenuItem value={3}>Done</MenuItem>
    </Select>
  </ListItem>
};

export default React.memo(ItemHeader);
