import React, { Component } from 'react';
import Features from '../Features/Features';
import './MainForm.css';

export default class MainForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass =
          item.name === this.props.selected[key].name
            ? 'feature__selected'
            : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
          <Features
            key={index}
            feature={key}
            featureClass={featureClass}
            index={index}
            newValue={item}
            updateFeature={(feature, newValue) =>
              this.props.updateFeature(feature, newValue)
            }
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

    return (
      <section className='main__form'>
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    );
  }
}
