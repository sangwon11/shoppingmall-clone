import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavbarCase = () => {
  const menuList = ['여성','남성','신생아/유아',"아동",'Home','Sale']
  const navigate = useNavigate()
  
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
    <div>

      <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} style={{margin:3}} />
        <div>로그인</div>
      </div>

      <div className='nav-section'>
        <div className='title'>Flugel</div>
      </div>

      <div className='menu-area'>

          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

        <div className='search-bar'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text' onKeyPress={(event)=>search(event)}/>
        </div>
        
      </div>

    </div>
  )
}

export default NavbarCase;