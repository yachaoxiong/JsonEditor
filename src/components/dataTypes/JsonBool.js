import React from 'react';
import DataLabel from './DataLabel';
const Bool = ({ value, dataKey, dataType }) => {
  return (
    <div style={{ padding: 5 }}>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        <span style={{ color: 'green' }}>{value}</span>
      </span>
    </div>
  );
};

export default Bool;
