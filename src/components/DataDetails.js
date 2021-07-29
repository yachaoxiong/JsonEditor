import React, { useEffect, useState } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DataType from './dataTypes/Index';
import { getTypes } from './dataTypes/getTypes';
import FileCopyIcon from '@material-ui/icons/FileCopy';
const DataView = ({ data, onDelete, onEdit }) => {
  const [col, setCol] = useState(false);
  const [message, setMessage] = useState(false);
  const [keys, setKeys] = useState([]);
  const [currentData, setCurrentData] = useState();
  useEffect(() => {
    setKeys(Object.getOwnPropertyNames(data));
    setCurrentData(data);
  }, [data]);
  const copyDataToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data));
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };
  const toggleJsonView = () => {
    setCol(!col);
  };
  const renderMessage = () => {
    if (message) {
      return (
        <div>
          <span
            style={{
              fontWeight: 'bold',
              padding: 6,
              background: '#e5e5e5de',
              borderRadius: 5,
            }}
          >
            Copied!
          </span>
        </div>
      );
    } else {
      return;
    }
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
        {renderMessage()}
        <PlayCircleFilledIcon
          style={{ cursor: 'pointer' }}
          onClick={toggleJsonView}
          className='mainCollapseIcon'
        />
        "root" :
        <span className='boldStyle pl5'>
          {'{'}
          <span>
            <FileCopyIcon
              style={{ fontSize: 16, color: 'gray', cursor: 'pointer' }}
              onClick={copyDataToClipboard}
            />
          </span>
        </span>
        {renderData()}
        <div className='boldStyle '>{'}'}</div>
      </div>
    </div>
  );
};

export default DataView;
