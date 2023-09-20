import './App.css';
import Home from './Pages/Home';
import SingleProduct from './Pages/Product';
import Register from './Pages/Register';
import ProductList from './Pages/Productlist';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Protected from './Pages/Protected';

function App() {
  return (

      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Protected Component={Home} />} />
        <Route path='/Register' element={<Protected Component={Register} />} />
        <Route path='/login' element={<Protected Component={Login} />} />
        <Route path='/ProductList' element={<Protected Component={ProductList} />} />            
        <Route path='/SingleProduct' element={<Protected Component={SingleProduct} />} />
        <Route path='/Cart' element={<Protected Component={Cart} />} />
       
        
      </Routes>
      </BrowserRouter> 
  );
}

export default App;
