import React from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = ({setMember}) => {
    const navigate = useNavigate()
    const signupUser = (event) => {
        event.preventDefault();
        setMember(true);
        navigate('/login')
    }
    const gotoLogin =() => {
        navigate('/login')
    }
  return (
    <div className='signup'>
        <div className='shape'></div>
        <div className='signup-box'>
            <h2>SIGN UP</h2>
            <form onSubmit={(event) => signupUser(event)}>
                <div>
                    <input/>
                    <label>ID</label>
                </div>
                <div>
                    <input/>
                    <label>Password</label>
                </div>
                <div>
                    <input/>
                    <label>Email</label>
                </div>
                <div>
                    <button className='btn' type='submit'>SIGN UP</button>
                </div>
                <div className='login-btn'>
                    <p>Do you have an account ?<span onClick={gotoLogin}>LOG IN</span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;