const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(btnName => {
        return (
          <li key={btnName}>
            <button type="button" onClick={onLeaveFeedback}>
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
