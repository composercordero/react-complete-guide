import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return {
      value: action.value, 
      isValid: action.value.includes('@')
    };
  }
  if (action.type === 'INPUT_BLUR'){
    return {
      value: state.value, 
      isValid: state.value.includes('@')
    };
  }
  return {value: '', isValid:false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.value, 
      isValid: action.value.trim().length > 6
    };
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: state.value, 
      isValid: state.value.trim().length > 6
    };
  }
  
  return {value: '', isValid:false};
};

const Login = () => {

const ctx = useContext(AuthContext);

// USE STATE -------------------------------

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

// USE REDUCER -------------------------------

  const [emailState, dispatchEmail] = useReducer(emailReducer,{value:'', isValid:null,});

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:null,});
  
// OBJECT DESTRUCTURING (via alias assignment) ------------------

const {isValid: emailIsValid } = emailState;
const {isValid: passwordIsValid } = passwordState;

// USE EFFECT -------------------------------

  useEffect(()=> {
    const identifier = setTimeout(() => {
      console.log('checking for form validity')
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    //cleanup function || This runs before every side effect function

    return () => {
      console.log('cleanup')
      clearTimeout(identifier)
    }; 

  }, [emailIsValid, passwordIsValid]);


// FUNCTIONS -------------------------------

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', value: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id='email' label='email' type='email'
          isValid={emailIsValid} onChange={emailChangeHandler} onBlur={validateEmailHandler}
          value={emailState.value}
        />

        <Input
          id='password' label='password' type='password'
          isValid={passwordIsValid} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}
          value={passwordState.value}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
