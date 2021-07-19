import React from 'react';

const DataLabel = ({ type }) => {
  return (
    <span
      style={{
        padding: '0px 6px',
        color: 'gray',
        border: '1px solid gray',
        borderRadius: 5,
        fontSize: 11,
        margin: '0 3px',
      }}
    >
      {type}
    </span>
  );
};

export default DataLabel;
