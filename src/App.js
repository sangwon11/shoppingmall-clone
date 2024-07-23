import './App.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './page/component/Navbar';
import PrivateRoute from './Route/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NavbarCase from './page/component/NavbarCase';


function App() {
  const [authenticate, setAuthenticate] = useState(false);
  
  useEffect(() => {
    console.log('authenticate',authenticate)
  }, [authenticate])

  return (
    <div className='all'>
      <Navbar/>
      <NavbarCase/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
