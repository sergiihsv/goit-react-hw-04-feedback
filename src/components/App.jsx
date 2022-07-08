import { Component } from 'react';
import { Feedback } from './Feedback/FeedbackItems';

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

  render() {
    /* const { good, neutral, bad } = this.state; */
    const options = Object.keys(this.state);

    return (
      <div>
        <h2>Please leave message</h2>
        <Feedback options={options} leaveFeedback={this.leaveFeedback} />;
      </div>
    );
  }
}
