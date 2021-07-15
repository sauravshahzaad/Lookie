import Paper from '@material-ui/core/Paper';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    justifyContent:'center',
    alignItems:'center',
  },
}));

function ContactUs(){
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Paper elevation={3} />
      </div>
    );
}
export default ContactUs;