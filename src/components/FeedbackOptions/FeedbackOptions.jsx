import propTypes from 'prop-types';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          onClick={leaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  leaveFeedback: propTypes.func.isRequired,
};
