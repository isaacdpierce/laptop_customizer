import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import './MainForm.css';
import FeatureList from '../FeatureList/FeatureList';
import FeatureForm from '../FeatureForm/FeatureForm';

const MainForm = ({ features, selected, updateFeature }) => {
  const featuresList = Object.keys(features).map(key => {
    const options = features[key].map((item, index) => {
      const selectedClass =
        item.name === selected[key].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;

      return (
        <FeatureItem
          key={index}
          feature={key}
          featureClass={featureClass}
          index={index}
          newValue={item}
          updateFeature={(feature, newValue) =>
            updateFeature(feature, newValue)
          }
        />
      );
    });

    return <FeatureList key={key} name={key} options={options} />;
  });

  return (
    <FeatureForm
      title='TECH SPECS AND CUSTOMIZATIONS'
      features={featuresList}
    />
  );
};

export default MainForm;
