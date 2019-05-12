import React from 'react';

const FeatureForm = ({ title, features }) => {
  return (
    <section className='main__form'>
      <h3>{title}</h3>
      {features}
    </section>
  );
};

export default FeatureForm;
