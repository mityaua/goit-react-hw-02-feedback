import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  section: {
    padding: '15px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '15px',
  },
});

const Section = ({ title, children }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
