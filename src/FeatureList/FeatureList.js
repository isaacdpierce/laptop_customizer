import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';

const FeatureList = ({ features, selected, updateFeature }) =>
  Object.keys(features).map(key => {
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
          updateFeature={updateFeature}
        />
      );
    });
    return (
      <div className='feature' key={key}>
        <div className='feature__name'>{key}</div>
        <ul className='feature__list'>{options}</ul>
      </div>
    );
  });

export default FeatureList;
