import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const data = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const Pagination = () => {
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li>Item #{item}</li>
        ))}
      </ul>
      <ReactPaginate previousLabel="<" nextLabel=">" />
    </>
  );
};

export default Pagination;
