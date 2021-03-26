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

export default Section;
