import React from 'react';

const Unde = ({ value, dataKey, dataType }) => {
  return (
    <div style={{ padding: 5 }}>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        <span style={{ color: 'blue' }}>{value}</span>
      </span>
    </div>
  );
};

export default Unde;
