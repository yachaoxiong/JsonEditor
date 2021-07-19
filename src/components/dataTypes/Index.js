import React from 'react';
import JsonNumber from './JsonNumber';
import JsonString from './JsonString';
import JsonBool from './JsonBool';
import JsonObject from './JsonObject';
import JsonArray from './JsonArray';
import JsonFunction from './JsonFunction';

const Index = ({ dataType, dataValue, dataKey, onEdit, onDelete }) => {
  const renderValue = () => {
    switch (dataType) {
      case 'number':
        return (
          <JsonNumber
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      case 'string':
        return (
          <JsonString
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      case 'object':
        return (
          <JsonObject
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      case 'boolean':
        return (
          <JsonBool value={dataValue} dataKey={dataKey} dataType={dataType} />
        );
      case 'array':
        return (
          <JsonArray value={dataValue} dataKey={dataKey} dataType={dataType} />
        );
      case 'function':
        return (
          <JsonFunction
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
          />
        );
      default:
        return null;
    }
  };
  return renderValue();
  // return <div>new</div>;
};

export default Index;
