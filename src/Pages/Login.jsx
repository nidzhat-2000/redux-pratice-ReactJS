import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../stores/auth';

function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const loginHandle = () => {
    const user = {
      id: 1,
      name: 'nicat',
      paswword: '056',
    };
    dispatch(logIn(user));
    history('/profile');
  };

  return (
    <div style={{ background: 'red' }}>
      <p>First you Need to Log in !</p>
      <button onClick={loginHandle}>log in</button>
    </div>
  );
}

export default Login;
