import React from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const gotoLogin =() => {
        navigate('/login')
    }
  return (
    <div className='signup'>
        <div className='shape'></div>
        <div className='signup-box'>
            <h2>SIGN UP</h2>
            <form>
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
        <div className='signup-info login'>
            <h2>Create Account</h2>
            <p>description description description description</p>
        </div>
    </div>
  )
}

export default SignUp;