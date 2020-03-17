import React from 'react';
import './counter.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
      document.getElementById('currentCount').style.color='green';
    } else if (count < 0) {
      polarity = 'negative';
      document.getElementById('currentCount').style.color='red';

    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <span className="down clicker" id='downClick' onClick={this.handleDown}> - </span>
        <span className={classes} id='currentCount'>{this.state.count}</span>
        <span className="up clicker" id='upClick' onClick={this.handleUp}> + </span>
      </section>
    );
  }
}

export default Counter;
