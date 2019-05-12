import React from 'react';

const SummaryTotal = ({ total }) => {
  return (
    <div className='summary__total'>
      <div className='summary__total__label'>Your Price: </div>
      <div className='summary__total__value'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(total)}
      </div>
    </div>
  );
};

export default SummaryTotal;
