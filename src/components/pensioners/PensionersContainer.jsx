import React, { useEffect, useState, useCallback } from 'react';
import { getAllPensioners } from './PensionersDataService';
import PensionersTable from "./PensioanersTable";

function createData({id, name, dateOfBirth, sex}) {
  return {id, name, dateOfBirth, sex };
}

const headCells = [
  { id: 'id', numeric: false, disablePadding: false, label: 'Id' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'dateOfBirth', numeric: true, disablePadding: false, label: 'Date of birth' },
  { id: 'sex', numeric: false, disablePadding: false, label: 'Sex' }
];

const PensionersContainer = () => {
  const [data, setData] = useState([]);

  const test = useCallback(() => { // toDO: read about
      getAllPensioners()
        .then(function ({ data }) {
          setData(data.map(item => createData(item)));
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [setData]);

    useEffect(() => { // toDO: read about useEffect
      test();
    }, [test]);

  return <PensionersTable
    tableData={data}
    headCells={headCells}
  />;
};

export default PensionersContainer;