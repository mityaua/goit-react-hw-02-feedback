import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  // Стейт
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод, который берёт названия кнопок и по ним прибавляет 1 к стейту
  onLeaveFeedback = event => {
    const label = event.target.textContent;

    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  // Метод, который суммирует значения отзывов в стейте
  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0,
    );

    return total;
  };

  // Считает процент хороших отзывов (хорошие умножаем на 100 и делим на общее количество)
  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state} // Передаем в компонент кнопок весь стейт
            onLeaveFeedback={this.onLeaveFeedback} // Метод для названий кнопок и инкримента
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback} // Передаем в компонент статистики подсчет всех отзывов
            positivePercentage={this.countPositiveFeedbackPercentage} // Туда же передаем подсчет хороших отзывов
          />
        </Section>
      </>
    );
  }
}

export default App;
