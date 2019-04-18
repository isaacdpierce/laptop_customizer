import React, { Component } from 'react';
import './Features.css';

export default class Features extends Component {
  render() {
    const {
      newValue,
      index,
      feature,
      featureClass,
      updateFeature,
    } = this.props;

    return (
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
  }
}
