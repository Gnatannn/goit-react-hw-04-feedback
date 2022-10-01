import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style: none;
  padding-bottom: 30px;
`;

export const StatisticsItem = styled.li`
  margin: 10px;
`;

export const StatisticsItemTotal = styled.li`
  margin: 10px;
`;

export const StatisticsItemPositive = styled.li`
  margin: 10px;
  font-size: large;
  font-weight: 700;
  color: ${p => {
    return p.positiveRate > 51 ? 'green' : 'red';
  }};
`;
