import { Component } from 'react';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from '../styles/GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const key = event.target.name;
    this.setState(prevState => {
      return { [key]: (prevState[key] += 1) };
    });
  };

  countTotalFeedback = () => {
    const total = this.state;
    return total.good + total.neutral + total.bad;
  };

  countPositiveFeedbackPercentage = event => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalStats = this.countTotalFeedback();
    const goodStats = this.countPositiveFeedbackPercentage();

    return (
      <>
        <GlobalStyle />
        <Section title={'Please leave feedback'}>
          <Feedback options={options} leaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          {totalStats > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalStats}
              positivePercentage={goodStats}
            />
          ) : (
            <Notification message={'There is no feedback!'} />
          )}
        </Section>
      </>
    );
  }
}
