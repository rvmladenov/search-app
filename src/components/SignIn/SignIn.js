import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © rvm ' + new Date().getFullYear() + '.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}

const SignIn = (props) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
  });

  const loginHandler = (event) => {
        event.preventDefault();

        props.onLogin(state.loginForm.email.value, state.loginForm.password.value);
  }

    const formElementsArray = [];
    for (let key in state.loginForm) {
        formElementsArray.push({
            id: key,
            config: state.loginForm[key]
        });
    }

    const inputChangeHandler = (event, elementId) => {
        const updatedControls = {
            ...state.loginForm,
            [elementId]: {
                ...state.loginForm[elementId],
                value: event.target.value,
                valid: checkValidity(event.target.value, state.loginForm[elementId].validation),
                touched: true
            }
        }
        setState({loginForm: updatedControls});
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form className={classes.form} noValidate>
                {formElementsArray.map(formElement => {
                    let txtFld = (<TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        key={formElement.id}
                        type={formElement.config.elementType}
                        value={formElement.config.value}
                        onChange={(event) => inputChangeHandler(event, formElement.id)}
                    />)

                    if (!formElement.config.valid && formElement.config.value) {
                        txtFld = (<TextField
                            error
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            key={formElement.id}
                            type={formElement.config.elementType}
                            value={formElement.config.value}
                            onChange={(event) => inputChangeHandler(event, formElement.id)}
                        />)
                    }
                
                    return txtFld;
                }
            )}
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button disabled={!!formElementsArray.find(elem => !elem.config.valid)}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(event => loginHandler(event))}
            >
                Sign In
            </Button>
            </form>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
        </Container>
    );
}

export default SignIn;