import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import DataTable from './DataTable/DataTable';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }
// }));

const Results = (props) => {
  // const classes = useStyles();
  
  // let results = (
  //   <Grid container spacing={3}>
  //     <Grid item xs={12}>
  //       <Paper className={classes.paper}><h3>Please select templates from the list to view their data :)</h3></Paper>
  //     </Grid>
  //   </Grid>
  // );

  // if (props.resultTemplates && props.resultTemplates.length > 0) {
    // let results = props.resultTemplates.map(template => (
    //   <div key={template.id} className={classes.root}>
    //     <ExpansionPanel template={template} />
    //   </div>
    // ));
  // }

  return (
    <div>
      <DataTable templates={props.resultTemplates} />
    </div>
  )
}

export default Results;