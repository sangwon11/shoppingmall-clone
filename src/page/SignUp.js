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
        <div className='signup-box'>
            <h2>Create Account</h2>
            <form>
                <div>
                    <input></input>
                    <label>ID</label>
                </div>
                <div>
                    <input></input>
                    <label>Password</label>
                </div>
                <div>
                    <input></input>
                    <label>Email</label>
                </div>
                <div>
                    <button>Register</button>
                </div>
                <div>
                    <p>Do you have an account ?<span onClick={gotoLogin}>LOG IN</span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;