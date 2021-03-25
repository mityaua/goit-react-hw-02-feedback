const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        <button type={options.type} onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li>
        <button type={options.type} onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button type={options.type} onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
