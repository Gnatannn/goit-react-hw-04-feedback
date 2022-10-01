import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsItemTotal,
  StatisticsItemPositive,
} from './Statistics.styled';
import { Section } from 'components/Section/Section';

export const Statistics = ({ good, neutral, bad, total, positiveRate }) => {
  return (
    <Section title="Statistics">
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItemTotal>Total: {total}</StatisticsItemTotal>
        <StatisticsItemPositive positiveRate={positiveRate}>
          Positive feedback rate: {positiveRate}%
        </StatisticsItemPositive>
      </StatisticsList>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveRate: PropTypes.number.isRequired,
};
