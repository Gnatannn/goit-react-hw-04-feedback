import { Component } from 'react';
import Notiflix from 'notiflix';
import { Container } from './Feedback.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateClick = feedback => {
    Notiflix.Notify.success(`Thank you for a ${feedback} feedback!`);
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (good !== 0) {
      return Math.round((good * 100) / total);
    } else {
      return 0;
    }
  };

  render() {
    return (
      <>
        <Container>
          <Section title="Please leave a feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onClickFeedback={this.handleStateClick}
            />
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positiveRate={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <h2 style={{ textAlign: 'center' }}>There is no feedback</h2>
            )}
          </Section>
        </Container>
      </>
    );
  }
}

Notiflix.Notify.init({
  position: 'right-bottom',
  timeout: 1000,
});

export default Feedback;
