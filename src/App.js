import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import { Routes,Route } from 'react-router-dom';
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import EditProduct from './component/EditProduct';
import LoginForm from './component/LoginForm';

function App() {
  
  return (
    <>

 
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/addproduct' element={<AddProduct/>} ></Route>
      <Route path='/editproduct/:id' element={<EditProduct/>} ></Route>
    
    </Routes>

    </>
  );
}

export default App;
