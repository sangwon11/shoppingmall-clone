import './App.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './page/component/Navbar';
import Main from './page/Main';
import Cart from './page/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import SignUp from './page/SignUp';
import ProductDetail from './page/ProductDetail'
import { CartProvider } from './page/CartContext';

function App() {
  const [member, setMember] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    console.log('authenticate',authenticate)
  }, [authenticate])

  return (
    <CartProvider>
    <div className='background'>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} products={products} setProducts={setProducts}/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/store' element={<ProductAll/>}/>
        <Route path='/signup' element={<SignUp setMember={setMember}/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<ProductDetail authenticate={authenticate}/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
