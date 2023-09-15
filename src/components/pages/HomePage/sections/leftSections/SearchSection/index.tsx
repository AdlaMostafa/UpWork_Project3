'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchComponentProps{}

const SearchSection:React.FC<SearchComponentProps> = () => {
  const [selectedValue4,setSelectedValue4]=React.useState<string>('');
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
       width: '99.5%',
       marginTop:'20px',
       border:'1px solid lightgray',
       height:'35px',
       backgroundColor:'white',
       borderRadius:'6px',
       '&:hover':{
        backgroundColor:'white'
       }
      }}
    >
      
      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Search for job"
      />
      <div>
        
        <IconButton type="button" sx={{ p: '8px',backgroundColor:'#3c8224' ,borderRadius:'0px 6px  8px 0px',marginRight:'-2px',color:'white',width:'50px',height:'38px','&:hover':{
        backgroundColor:'#3c8224'
       }}} aria-label="search">
        <SearchIcon/>
      </IconButton></div>
      
    </Paper>
  );
};

export default SearchSection;
