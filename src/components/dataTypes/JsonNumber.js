import React, { useState, useEffect } from 'react';
import DataLabel from './DataLabel';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
const Num = ({ value, dataKey, dataType, onEdit, onDelete }) => {
  const [currentValue, setCurrentValue] = useState();
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  const showEditInput = () => {
    setShowInput(true);
  };
  const editValue = () => {
    onEdit(currentValue, dataKey);
    setShowInput(false);
  };
  const deleteValue = () => {
    console.log('delete a string');
    onDelete(dataKey);
    setShowInput(false);
  };
  const cancelEdit = () => {
    setShowInput(false);
  };
  return (
    <div className='p5'>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        <span style={{ color: '#7C83FD' }}>
          {showInput ? (
            <span>
              <TextField
                className='p5'
                type='number'
                defaultValue={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
              <IconButton
                color='primary'
                aria-label='edit value'
                component='span'
                onClick={editValue}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color='secondary'
                aria-label='edit value'
                component='span'
                onClick={deleteValue}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color='secondary'
                aria-label='edit value'
                component='span'
                onClick={cancelEdit}
              >
                <CancelIcon />
              </IconButton>
            </span>
          ) : (
            <span onClick={showEditInput}>{currentValue}</span>
          )}
        </span>
      </span>
    </div>
  );
};

export default Num;
