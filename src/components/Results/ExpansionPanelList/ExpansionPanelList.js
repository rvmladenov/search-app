import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
  });

export default function ExpansionPanelList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container  spacing={3}>
                <Grid item xs={12}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                        >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox />}
                            label="I acknowledge that I should stop the click event propagation"
                        />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography color="textSecondary">
                            The click event of the nested action will propagate up and expand the panel unless you
                            explicitly stop it.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>

                <Grid item xs={12}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                        >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox />}
                            label="I acknowledge that I should stop the click event propagation"
                        />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography color="textSecondary">
                            The click event of the nested action will propagate up and expand the panel unless you
                            explicitly stop it.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </Grid>
        </div>
  );
}