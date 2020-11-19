import React from 'react';

function Filters({ nameInput, regionInput }) {
  return (
    <div>
      <input {...nameInput} />
      <select {...regionInput}>
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filters;
