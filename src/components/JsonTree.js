import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import DataDetails from './DataDetails';
import Searchbar from './shared/Searchbar';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const JsonTree = () => {
  const [showError, setShowError] = useState(false);
  const [currentResource, setCurrentResource] = useState({});
  //loading initial resource
  const fetchInitDataResource = async () => {
    const result = await axios.get(
      'https://random-data-api.com/api/users/random_user'
    );
    setCurrentResource(result.data);
  };
  useEffect(() => {
    fetchInitDataResource();
  }, []);
  //update current resource
  const updateDataSource = async (URL) => {
    try {
      const result = await axios.get(URL);
      setCurrentResource(result.data);
    } catch (e) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };
  // show error message
  const sendErrorMessage = () => {
    if (showError)
      return (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={showError}
        >
          <Alert elevation={6} variant='filled' severity='error'>
            Invalid URL!
          </Alert>
        </Snackbar>
      );

    return;
  };
  // edit a property from the object
  const EditObj = (newValue, key) => {
    let newObj = currentResource;
    newObj[key] = newValue;
    setCurrentResource(currentResource);
  };
  // delete a property from the object
  const DeleteObj = (key) => {
    setCurrentResource(_.omit(currentResource, key));
  };

  return (
    <div className='appContainer'>
      <Searchbar updateDataSource={updateDataSource} />
      {sendErrorMessage()}
      <DataDetails
        data={currentResource}
        onDelete={DeleteObj}
        onEdit={EditObj}
      />
    </div>
  );
};

export default JsonTree;
