// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Grid from '@material-ui/core/Grid';
// import Chip from '@material-ui/core/Chip';
// import DoneIcon from '@material-ui/icons/Done';
// import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//     },
//     heading: {
//       fontSize: theme.typography.pxToRem(15),
//       flexBasis: '33.33%',
//       flexShrink: 0,
//     },
//     secondaryHeading: {
//       fontSize: theme.typography.pxToRem(15),
//       color: theme.palette.text.secondary,
//     },
//     chipsRoot: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(0.5),
//       }
//     }
//   }));

// export default function ExpansionPanelList(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const handleDelete = () => {
//     console.info('You clicked the delete icon.');
//   };

//     return (
//         <div className={classes.root}>
//             <Grid container>
//                 <Grid item xs={12}>

//                 <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//                     <ExpansionPanelSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1bh-content"
//                     id="panel1bh-header"
//                     >
//                     <Typography className={classes.heading}>{props.template.name}</Typography>
//                     <Typography className={classes.secondaryHeading}>{props.template.title || '<no title provided>'}</Typography>
//                     </ExpansionPanelSummary>
//                     <ExpansionPanelDetails>
//                     <Typography>
//                       <div className={classes.chipsRoot}>
//                         Questions:
//                         {props.template.questions.map(question => (
//                           <Chip
//                             label={question}
//                             clickable
//                             color="primary"
//                           />
//                         ))}
//                       </div>
//                     </Typography>
//                     </ExpansionPanelDetails>
//                 </ExpansionPanel>

//                 </Grid>
//             </Grid>
//         </div>
//   );
// }

import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
  const [state] = React.useState({
    columns: [
      { 
        title: 'Template Name',
        field: 'name',
        render: rowData => <h3>{rowData.name}</h3>
      },
      { title: 'Description', field: 'description' },
      { 
        title: 'Questions',
        field: 'questions',
        render: rowData => <h4>{rowData.questions}</h4>
      }
    ],
    data: [],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={props.templates}
    />
  );
}