import React from 'react';
import FeatureList from '../FeatureList/FeatureList';

const FeatureForm = ({ title, features, selected, updateFeature }) => {
  return (
    <section className='main__form'>
      <FeatureList
        features={features}
        selected={selected}
        updateFeature={updateFeature}
      />
    </section>
  );
};

export default FeatureForm;
