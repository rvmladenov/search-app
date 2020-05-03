import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TemplateSearch from '../TemplateSearch/TemplateSearch';
import QuestionSearch from '../QuestionSearch/QuestionSearch';
import CONTROL_TYPE from './ControlsConstants';

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

  const onSelect = (type, answer) => {
    switch (type) {
      case CONTROL_TYPE.TEMPLATE:
        props.onTemplatesSelect(answer)
        break;
        
        case CONTROL_TYPE.QUESTION:
          props.onQuestionsSelect(answer);
      break;
    
      default:
        // TODO: Should throw an error
        console.log("incorrect type of an answer");
        break;
    }
  };

  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                    <TemplateSearch templates={ { 
                        templates: props.templates.templates,
                        selectedTemplates: props.templates.selectedTemplates,
                        questionIds: props.questions.questions.map(question => question.id)
                      } } onSelect={(answer) => {
                        onSelect(CONTROL_TYPE.TEMPLATE, answer)
                      }} />
                </Paper>
            </Grid>

            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                    <QuestionSearch questions={ { questions: props.questions.questions, selectedQuestions: props.questions.selectedQuestions } } onSelect={(answer) => {
                        onSelect(CONTROL_TYPE.QUESTION, answer)
                      }} />
                </Paper>
            </Grid>

        </Grid>
    </div>
  );
}