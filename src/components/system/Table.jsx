import React from 'react';
import '../../styles/scss/system/_table.scss';

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Svojtsvo</th>
          <th>Opis</th>
          <th>Vrsta</th>
          <th>Zadano</th>
        </tr>
      </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.cell1}</td>
          <td>{item.cell2}</td>
          <td>{item.cell3}</td>
          <td>{item.cell4}</td>
        </tr>
      ))}
    </tbody>
    </table>
  );
};

export default Table;
