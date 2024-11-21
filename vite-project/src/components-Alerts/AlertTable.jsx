import React, { useState, useEffect } from 'react';
import './AlertTable.css';

const AlertTable = () => {
  const [data, setData] = useState([]);

  // Simulate real-time data fetching (replace with your actual mechanism)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = [...data]; // Create a copy to avoid mutation
      // Simulate some data update (replace with your logic to fetch real-time data)
      newData[0].source = 'Updated Source';
      setData(newData);
    }, 2000); // Simulate data updates every 2 seconds

    return () => clearInterval(intervalId);
  }, [data]);

  const sortData = (columnIndex, sortOrder) => {
    const newData = [...data];
    newData.sort((a, b) => {
      if (a[columnIndex] < b[columnIndex]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[columnIndex] > b[columnIndex]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setData(newData);
  };

  return (
    <table className="alert-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th onClick={() => sortData('index', 'asc')}>
            Index
          </th>
          <th onClick={() => sortData('source', 'asc')}>
            Event Source
          </th>
          <th>Event Type</th>
          <th>Event Time</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {data.map((alert, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{alert.index}</td>
            <td>{alert.source}</td>
            <td>{alert.type}</td>
            <td>{alert.time.toLocaleString()}</td>
            <td>{alert.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlertTable;
