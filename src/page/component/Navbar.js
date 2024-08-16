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
  const gotoStore = () => {
    navigate('/store')
  }
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div className='nav'>

      <div className='nav-section-1'>
        <div onClick={gotoHome} className='title'>SENSATION</div>

        <ul className='nav-section-1-menu' onClick={gotoStore}>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

        <div className='nav-section-1-search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{margin:10}} />
          <input type='text' onKeyPress={(event)=>search(event)}/>
        </div>  
      </div>

      <div className='nav-section-2'>
        <div onClick={goToLogin}>LOG IN</div>
        <div>SIGN UP</div>
        <div>CART 0</div>
        <div>KRW</div>
      </div>

    </div>
  )
}

export default Navbar;