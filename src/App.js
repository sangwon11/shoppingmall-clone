import './App.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './page/component/Navbar';
import Main from './page/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import SignUp from './page/SignUp';
import ProductDetail from './page/ProductDetail';
/* 배포오류 */


function App() {
  const [member, setMember] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);
  
  useEffect(() => {
    console.log('authenticate',authenticate)
  }, [authenticate])

  return (
    <div className='background'>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/store' element={<ProductAll/>}/>
        <Route path='/signup' element={<SignUp setMember={setMember}/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<ProductDetail authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
