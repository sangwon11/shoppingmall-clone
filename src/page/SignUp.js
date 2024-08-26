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
          <div className='signup-box'>
              <div>
                  <h2>SIGN UP</h2>
              </div>
              <form onSubmit={(event) => signupUser(event)}>
                  <div className='input-area'>
                      <div className='input-area1'>
                          <div>
                              <input />
                              <label>ID</label>
                          </div>
                          <div>
                              <input type='password' />
                              <label>Password</label>
                          </div>
                          <div>
                              <input type='email' />
                              <label>Email</label>
                          </div>
                      </div>
                      <div className='input-area2'>
                          <div>
                              <input />
                              <label>Name</label>
                          </div>
                          <div>
                              <input />
                              <label>Phone Number</label>
                          </div>
                          <div>
                              <input />
                              <label>Address</label>
                          </div>
                      </div>
                  </div>
                  <div className='signup-btn-area'>
                      <button className='signup-btn' type='submit'>SIGN UP</button>
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