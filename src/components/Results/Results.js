import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from './ExpansionPanelList/ExpansionPanelList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

const Results = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel />
    </div>
  );
}

export default Results;