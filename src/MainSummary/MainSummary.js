import React, { Component } from 'react';

import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import './MainSummary.css';

export default class MainSummary extends Component {
  render() {
    const { selected } = this.props;

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    const summary = Object.keys(selected).map(key => {
      const name = selected[key].name;
      const cost = selected[key].cost;
      return <SummaryOption key={key} value={key} name={name} cost={cost} />;
    });

    return (
      <section className='main__summary'>
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <SummaryTotal total={total} />
      </section>
    );
  }
}
