import React, { useEffect, useState } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DataType from './dataTypes/Index';
import { getTypes } from './dataTypes/getTypes';
const DataView = ({ data, onDelete, onEdit }) => {
  const [col, setCol] = useState(false);
  const [keys, setKeys] = useState([]);
  const [currentData, setCurrentData] = useState();
  useEffect(() => {
    setKeys(Object.getOwnPropertyNames(data));
    setCurrentData(data);
  }, [data]);

  const toggleJsonView = () => {
    setCol(!col);
  };

  const renderData = () => {
    if (col)
      return (
        <div className='p5'>
          <span className='colorGray'>
            <span>{'{'}</span>
            {Object.keys(currentData).length} items<span>{'}'}</span>
          </span>
        </div>
      );
    return keys.map((k) => {
      return (
        <div key={k}>
          <DataType
            key={k}
            dataType={getTypes(currentData[k])}
            dataValue={currentData[k]}
            dataKey={k}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      );
    });
  };
  return (
    <div className='JsonTree'>
      <div>
        <PlayCircleFilledIcon
          onClick={toggleJsonView}
          className='mainCollapseIcon'
        />
        "root" :<span className='boldStyle pl5'>{'{'}</span>
        {renderData()}
        <div className='boldStyle '>{'}'}</div>
      </div>
    </div>
  );
};

export default DataView;
