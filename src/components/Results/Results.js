import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from './ExpansionPanelList/ExpansionPanelList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const Results = (props) => {
  const classes = useStyles();
  
  let results = (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}><h3>No data yet :)</h3></Paper>
      </Grid>
    </Grid>
  );

  if (props.resultTemplates && props.resultTemplates.length > 0) {
    results = props.resultTemplates.map(template => (
      <div className={classes.root}>
        <ExpansionPanel template={template} />
      </div>
    ));
  }

  return (
    <div>
      {results}
    </div>
  )
}

export default Results;