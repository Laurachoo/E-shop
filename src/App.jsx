import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './store/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddShop from './components/addShop/AddShop';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Shops from './components/shops/Shops';

function App() {
  const ctx = useAuth();
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Shops />} />
        <Route path='/shops' element={<Shops />} />
        <Route
          path='/addShop'
          element={
            ctx.isUserLoggedIn ? <AddShop /> : <Navigate to={'/login'} />
          }
        ></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
