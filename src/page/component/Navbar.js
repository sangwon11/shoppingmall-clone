import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['SERIES', 'STORE']
  const navigate = useNavigate()

  const [loginout,setLoginout] = useState('LOG IN');

  useEffect(() => {
    if (authenticate) {
      setLoginout('LOG OUT');
    } else {
      setLoginout('LOG IN');
    }
  }, [authenticate]);
  
  const gotoHome = () => {
    navigate('/')
  }
  const gotoSignUp = () => {
    navigate('/signup')
  }
  const gotoStore = () => {
    navigate('/store')
  }
  const gotoCart = () => {
    navigate('/cart')
  }
  const LoginLogout = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate('/login');
    } else {
      navigate('/login');
    }
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/store/?q=${keyword}`);
    }
  }

  return (
    <div className='nav'>
      <div className='nav1'>
      <div className='nav-section-1'>
        <div onClick={gotoHome} className='title'>FLUGEL</div>

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
        <div onClick={LoginLogout}>{loginout}</div>
        <div onClick={gotoSignUp}>SIGN UP</div>
        <div onClick={gotoCart}>CART 0</div>
        <div>KRW</div>
      </div>
      </div>
      <div className='nav2'>FlUGEL HOMEPAGE NEW OPEN
      </div>
    </div>
  )
}

export default Navbar;