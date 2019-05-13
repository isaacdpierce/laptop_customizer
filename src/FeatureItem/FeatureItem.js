import React from 'react';
import './FeatureItem.css';

const FeatureItem = ({
  newValue,
  index,
  feature,
  featureClass,
  updateFeature,
}) => (
  <li key={index} className='feature__item'>
    <div
      className={featureClass}
      onClick={e => updateFeature(feature, newValue)}
    >
      {newValue.name}(
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(newValue.cost)}
      )
    </div>
  </li>
);

export default FeatureItem;
