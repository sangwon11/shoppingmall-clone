import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const menuList = ['여성','남성','신생아/유아',"아동",'Home','Sale',"봄","여름","가을","겨울"]
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

      <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} style={{margin:3}} />
        <div>로그인</div>
      </div>

      <div className='nav-section'>
        <div onClick={gotoHome} className='title'>Flugel</div>
      </div>

      <div className='menu-area'>

          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

        <div className='search-bar'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{margin:10}} />
          <input type='text' onKeyPress={(event)=>search(event)}/>
        </div>
        
      </div>

    </div>
  )
}

export default Navbar;