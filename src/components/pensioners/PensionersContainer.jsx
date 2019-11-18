import React from 'react';
import { getAllPensioners } from './PensionersDataService';

const PensionersContainer = ({ children }) => {
  getAllPensioners()
    .then(function (response) {
      console.log(response);
      return <>{children}</>;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export default PensionersContainer;