import React from 'react';

const FeatureList = ({ name, options }) => {
  return (
    <div className='feature'>
      <div className='feature__name'>{name}</div>
      <ul className='feature__list'>{options}</ul>
    </div>
  );
};

export default FeatureList;
