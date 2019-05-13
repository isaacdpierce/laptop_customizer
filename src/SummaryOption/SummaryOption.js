import React from 'react';

const SummaryOption = ({ value, name, cost }) => (
  <div className='summary__option' key={value}>
    <div className='summary__option__label'>{value} </div>
    <div className='summary__option__value'>{name}</div>
    <div className='summary__option__cost'>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(cost)}
    </div>
  </div>
);

export default SummaryOption;
