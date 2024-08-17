import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/store')
  }
  const gotoSignup = () => {
    navigate('/signup')
  }
  return (
    <div className='login1'>
        <div className='shape'></div>
        <div className='login-box'>
            <h2>SIGN IN</h2>
            <form onSubmit={(event) => loginUser(event)}>
                <div>
                    <input/>
                    <label>ID</label>
                </div>
                <div>
                    <input/>
                    <label>Password</label>
                </div>
                <div>
                    <button className='btn' type='submit'>LOG IN</button>
                </div>
                <div className='login-btn'>
                    <p>Don't have an account ?<span onClick={gotoSignup}>SIGN UP</span></p>
                </div>
            </form>
        </div>
        <div className='login-info login'>
            <h2>WELCOME</h2>
            <p>description description description description</p>
        </div>
    </div>
  )
}

export default Login;