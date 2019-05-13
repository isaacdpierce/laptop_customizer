import React from 'react';
import './MainForm.css';
import FeatureForm from '../FeatureForm/FeatureForm';

const MainForm = ({ features, selected, updateFeature }) => {
  return (
    <FeatureForm
      title='TECH SPECS AND CUSTOMIZATIONS'
      features={features}
      selected={selected}
      updateFeature={updateFeature}
    />
  );
};

export default MainForm;
