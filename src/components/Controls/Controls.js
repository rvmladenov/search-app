import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MyButton from '../Button/Button';

import ThemeSearch from '../ThemeSearch/ThemeSearch';
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

export default function Controls() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <ThemeSearch />
                </Paper>
            </Grid>

            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <QuestionSearch />
                </Paper>
            </Grid>

            <Grid item xs={6} sm={3}>
                <MyButton />
            </Grid>
        </Grid>
    </div>
  );
}