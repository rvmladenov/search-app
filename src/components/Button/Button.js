import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const MyButton = () => {
  const classes = useStyles();

  return (
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
  );
}

export default MyButton;