import React, { Component } from 'react';
import './MainSummary.css';

export default class MainSummary extends Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map(key => (
      <div className='summary__option' key={key}>
        <div className='summary__option__label'>{key} </div>
        <div className='summary__option__value'>{selected[key].name}</div>
        <div className='summary__option__cost'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(selected[key].cost)}
        </div>
      </div>
    ));
    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );
    return (
      <section className='main__summary'>
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <div className='summary__total'>
          <div className='summary__total__label'>Your Price: </div>
          <div className='summary__total__value'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(total)}
          </div>
        </div>
      </section>
    );
  }
}
