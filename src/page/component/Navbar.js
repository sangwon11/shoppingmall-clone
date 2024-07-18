import React from 'react'

const Navbar = () => {
  const menuList = ['여성','devided','남성','신생아/유아',"아동",'h&m Home','Sale','지속가능성']
  return (
    <div>

      <div className='login-button'>
        <div>로그인</div>
      </div>

      <div className='nav-section'>
        <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpRqYm8ZV9DX0FdTQzy6Lpcm6GMKfBbNO7Q&s'/>
      </div>

      <div className='menu-area'>

          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

        <div>
          <input type='text'/>
        </div>
        
      </div>

    </div>
  )
}

export default Navbar;