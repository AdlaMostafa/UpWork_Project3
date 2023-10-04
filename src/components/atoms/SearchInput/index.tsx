'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { selectData } from '@/mock/SelectComponentInfo';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearch } from './style';

import { makeStyles } from '@mui/styles';

interface SearchComponentProps {}

const useStyles = makeStyles({
  select1: {
    color: 'green',
    border: 'none',
    marginRight: '5px',
    height: '30px',
    marginTop:'20px',
    fontSize:'18px',
  },
});

const SearchComponent: React.FC<SearchComponentProps> = () => {
  const classes = useStyles(); 

  const [selectedValue4, setSelectedValue4] = React.useState<string>('');
  const handleSelectChange4 = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue4(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '1px 1px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginLeft: '262px',
        marginTop: '20px',
        border: '1px solid lightgray',
        height: '35px',
        backgroundColor: 'white',
        borderRadius: '40px',
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <StyledSearch>
        <select
          value={selectedValue4}
          onChange={handleSelectChange4}
          className={classes.select1}
        >
          {selectData[3].options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </StyledSearch>
    </Paper>
  );
};

export default SearchComponent;
