import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <List>
      {options.map(key => (
        <li key={key}>
          <Button type="button" onClick={() => onClickFeedback(key)}>
            {key}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClickFeedback: PropTypes.func.isRequired,
};
