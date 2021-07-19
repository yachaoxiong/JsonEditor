import React, { useState, useEffect } from 'react';
import ValueTypes from './Index';
import DataLabel from './DataLabel';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import _ from 'lodash';
const JsonObject = ({ value, dataKey, dataType, onDelete }) => {
  const [col, setCol] = useState(true);
  const [keys, setKeys] = useState([]);
  const [currentValue, setCurrentValue] = useState({});
  useEffect(() => {
    setCurrentValue(value);
    setKeys(Object.keys(value));
  }, [value]);
  const EditOneProperty = (newValue, key) => {
    let newObj = currentValue;
    newObj[key] = newValue;
    setCurrentValue(newObj);
  };
  const DeleteOneProperty = (key) => {
    let newObj = _.omit(currentValue, key);
    setCurrentValue(newObj);
    setKeys(Object.keys(newObj));
  };

  const renderObject = () => {
    return keys.map((k) => {
      return (
        <ValueTypes
          key={k}
          dataType={typeof currentValue[k]}
          dataValue={currentValue[k]}
          dataKey={k}
          onEdit={EditOneProperty}
          onDelete={DeleteOneProperty}
        />
      );
    });
  };
  const renderObjContent = () => {
    if (col)
      return (
        <div className='p5 ml6'>
          <div onClick={toggleObj}>
            <PlayCircleFilledIcon
              onClick={toggleObj}
              className='collapseIcon'
            />
            <span>"{dataKey}"</span>

            <span>:</span>
            <span className='boldStyle pl5'>{'{'}</span>
            <span>
              <IconButton
                color='secondary'
                aria-label='edit value'
                component='span'
                onClick={() => {
                  onDelete(dataKey);
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label='edit value'
                component='span'
                // onClick={cancelEdit}
              >
                <CancelIcon />
              </IconButton>
            </span>
            <DataLabel type={dataType} />
          </div>
          <div className='pl12'>
            {renderObject()}
            <div>
              <span className='boldStyle'>{'}'}</span>
            </div>
          </div>
        </div>
      );
    return (
      <div className='p5 ml6'>
        <div>
          <PlayCircleFilledIcon onClick={toggleObj} className='collapseIcon' />"
          {dataKey}":
          <span className='boldStyle'>
            {'{'}
            <DataLabel type={dataType} />
          </span>
          <span className='colorGray'>{keys.length} items</span>
          <span className='boldStyle'>{'}'}</span>
        </div>
      </div>
    );
  };
  const toggleObj = () => {
    // setCurrentValue(currentValue);
    setCol(!col);
  };
  return renderObjContent();
};

export default JsonObject;
