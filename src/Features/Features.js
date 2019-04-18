import React, { Component } from 'react';

export default class Features extends Component {
  render() {
    const { item, key } = this.props;
    return (
      <li key={this.props.index} className='feature__item'>
        <div
          className={this.props.featureClass}
          onClick={e => this.props.updateFeature(key, item)}
        >
          {item.name}(
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(item.cost)}
          )
        </div>
      </li>
    );
  }
}
