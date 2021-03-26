import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  item: {
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },
  button: {
    padding: '5px 10px',
    border: '2px solid #d8d3d3',
    borderRadius: '5px',

    backgroundColor: 'white',

    fontWeight: 500,
    textTransform: 'capitalize',

    transition: 'all 250ms linear',

    cursor: 'pointer',

    '&:hover, &:focus': {
      backgroundColor: '#d8d3d3',
      color: '#6b6b6b',
      transition: 'all 250ms linear',
    },
  },
});

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {Object.keys(options).map(btnName => {
        return (
          <li className={classes.item} key={btnName}>
            <button
              className={classes.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
