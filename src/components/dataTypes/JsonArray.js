import React, { useState, useEffect } from 'react';
import DataLabel from './DataLabel';
import DateTypes from './Index';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { getTypes } from './getTypes';
const Array = ({ value, dataKey, dataType }) => {
  const [col, setCol] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const editOneFromArray = (newValue, key) => {
    let temp_state = [...currentValue];
    temp_state[key] = newValue;
    setCurrentValue(temp_state);
  };
  const deleteOneFromArray = (key) => {
    let tempArray = [...currentValue];
    tempArray.splice(key, 1);
    setCurrentValue(tempArray);
  };
  const renderArrayContent = () => {
    return currentValue.map((v, i) => {
      let type = getTypes(v);
      return (
        <DateTypes
          key={i}
          dataValue={v}
          dataType={type}
          dataKey={i}
          onEdit={editOneFromArray}
          onDelete={deleteOneFromArray}
        />
      );
    });
  };
  const renderContent = () => {
    if (col) {
      return (
        <div className='p5 ml6'>
          <span>
            <PlayCircleFilledIcon
              onClick={toggleArray}
              className='collapseIcon'
            />
            <span>"</span>
            <span>{dataKey}</span>
            <span>"</span> : <DataLabel type={dataType} />
            <span className='boldStyle'>[</span>
            <span className='colorGray'>{currentValue.length} items</span>
            <span className='boldStyle'>]</span>
          </span>
        </div>
      );
    }
    return (
      <div className='p5 ml6'>
        <span>
          <PlayCircleFilledIcon
            onClick={toggleArray}
            className='collapseIcon'
          />
          <span>"</span>
          <span>{dataKey}</span>
          <span>"</span> : <DataLabel type={dataType} />
          <span className='boldStyle'>[</span>
          {renderArrayContent()}
          <span className='boldStyle'>]</span>
        </span>
      </div>
    );
  };

  const toggleArray = () => {
    setCol(!col);
  };
  return renderContent();
};

export default Array;
