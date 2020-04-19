import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ThemeSearch from '../TemplateSearch/TemplateSearch';
import QuestionSearch from '../QuestionSearch/QuestionSearch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Controls(props) {
  const classes = useStyles();

  // TODO: Modify the following using just 1 function with switch cases
  const onSelectTemplates = (obj) => {
    // TODO:
    console.log(obj);
  };
  
  const onSelectQuestions = (obj) => {
    // TODO:
    console.log(obj);
  };

  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                    <ThemeSearch templates={props.templates} onSelect={onSelectTemplates} />
                </Paper>
            </Grid>

            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                    <QuestionSearch questions={props.questions} onSelect={onSelectQuestions} />
                </Paper>
            </Grid>

        </Grid>
    </div>
  );
}