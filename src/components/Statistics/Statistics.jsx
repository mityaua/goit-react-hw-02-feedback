import PropTypes from 'prop-types';
import Notification from '../Notification';

import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total();
  const positiveValue = positivePercentage();

  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <li className={styles.item}>
            Good: <span className={styles.value}>{good}</span>
          </li>
          <li className={styles.item}>
            Neutral: <span className={styles.value}>{neutral}</span>
          </li>
          <li className={styles.item}>
            Bad: <span className={styles.value}>{bad}</span>
          </li>
          <li className={styles.item}>
            Total: <span className={styles.value}>{totalFeedback}</span>
          </li>
          <li className={styles.item}>
            Positive feedback:{' '}
            <span className={styles.value}>{positiveValue}%</span>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
