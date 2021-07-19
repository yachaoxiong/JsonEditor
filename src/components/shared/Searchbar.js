import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
const Searchbar = ({ updateDataSource }) => {
  const [URL, setURL] = useState('');
  return (
    <div data-testid='searchBar-1'>
      <TextField
        data-testid='text-1'
        label='Data URL'
        id='outlined-margin-dense'
        margin='dense'
        helperText='Paste your data URL here！'
        variant='outlined'
        onChange={(e) => setURL(e.target.value)}
      />

      <Button
        data-testid='btn-1'
        style={{
          margin: '10px 10px 20px 20px',
          background: '#FF7600',
          color: 'white',
        }}
        onClick={() => updateDataSource(URL)}
        variant='contained'
      >
        Submit
      </Button>
    </div>
  );
};

export default Searchbar;
