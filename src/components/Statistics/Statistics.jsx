import { createUseStyles } from 'react-jss';
import Notification from '../Notification';

const useStyles = createUseStyles({
  item: {
    '&:not(:last-child)': {
      marginBottom: '5px',
    },
  },
  value: {
    fontWeight: 500,
  },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const classes = useStyles();
  const totalFeedback = total();
  const positiveValue = positivePercentage();

  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <li className={classes.item}>
            Good: <span className={classes.value}>{good}</span>
          </li>
          <li className={classes.item}>
            Neutral: <span className={classes.value}>{neutral}</span>
          </li>
          <li className={classes.item}>
            Bad: <span className={classes.value}>{bad}</span>
          </li>
          <li className={classes.item}>
            Total: <span className={classes.value}>{totalFeedback}</span>
          </li>
          <li className={classes.item}>
            Positive feedback:{' '}
            <span className={classes.value}>{positiveValue}%</span>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

export default Statistics;
