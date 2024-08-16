import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';


const Navbar = () => {
  const menuList = ['SERIES', 'STORE']
  const navigate = useNavigate()
  
  const gotoHome = () => {
    navigate('/')
  }
  const goToLogin = () => {
    navigate('/login')
  }
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div className='nav'>

      <div className='nav-section'>
        <div onClick={gotoHome} className='title'>Sensation</div>
      </div>

      <div className='menu-area'>

          <ul className='menu-area-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

        <div className='menu-area-search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{margin:10}} />
          <input type='text' onKeyPress={(event)=>search(event)}/>
        </div>
        
      </div>

      <div className='login-button' onClick={goToLogin}>
        <div>Log In</div>
      </div>

    </div>
  )
}

export default Navbar;