import React, { useEffect, useState, useCallback } from 'react';
import { getAllPensioners } from './PensionersDataService';
import PensionersTable from "./PensioanersTable";

const PensionersContainer = ({ tableData, headCells }) => {
  const [data, setData] = useState([]);

  const test = useCallback(() => { // toDO: read about
      console.count();
      getAllPensioners()
        .then(function ({ data }) {
          setData(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [setData]);

    useEffect(() => { // toDO: read about useEffect
      test();
    }, [test]);

  return <PensionersTable
    test={data}
    tableData={tableData}
    headCells={headCells}
  />;
};

export default PensionersContainer;