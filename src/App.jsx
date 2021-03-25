import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  // Заменяет конструктор через Babel
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод, использующий предыдущее состояние стейта (повесили на кнопки)
  onLeaveFeedback = event => {
    const label = event.target.textContent; // toLowerCase() выкинул

    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0,
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );

    // if (!percent) {
    //   return 0;
    // } тоже выкинул (чтобы не делить на ноль...)

    return percent;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statisctics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
