import React from 'react';
import DataLabel from './DataLabel';
const Fuc = ({ value, dataKey, dataType }) => {
  return (
    <div className='p5'>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        <span style={{ color: 'blue' }}>Function()</span>
      </span>
    </div>
  );
};

export default Fuc;
