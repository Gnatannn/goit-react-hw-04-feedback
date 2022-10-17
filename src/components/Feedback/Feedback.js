import { useState } from 'react';
import Notiflix from 'notiflix';
import { Container } from './Feedback.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleStateClick = feedback => {
    Notiflix.Notify.success(`Thank you for a ${feedback} feedback!`);
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        Notiflix.Notify.warning(`What is your ${feedback} feedback???`);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (good !== 0) {
      return Math.round((good * 100) / total);
    } else {
      return 0;
    }
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Container>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={options}
            onClickFeedback={handleStateClick}
          />
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveRate={countPositiveFeedbackPercentage()}
            />
          ) : (
            <h2 style={{ textAlign: 'center' }}>There is no feedback</h2>
          )}
        </Section>
      </Container>
    </>
  );
};

Notiflix.Notify.init({
  position: 'right-bottom',
  timeout: 1000,
});

export default Feedback;
