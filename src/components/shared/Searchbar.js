import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
const Searchbar = ({ updateDataSource }) => {
  const [URL, setURL] = useState('');
  return (
    <div>
      <TextField
        label='Data URL'
        id='outlined-margin-dense'
        margin='dense'
        helperText='Paste your data URL here！'
        variant='outlined'
        onChange={(e) => setURL(e.target.value)}
      />

      <Button
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
