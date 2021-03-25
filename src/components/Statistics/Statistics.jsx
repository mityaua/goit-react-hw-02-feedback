import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statisctics</h2>

      {/* Нужно вынести */}
      {!!total() ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total()}</li>
          <li>Positive feedback: {positivePercentage()}%</li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

export default Statistics;
