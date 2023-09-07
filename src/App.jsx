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
        {/* <Route path='/adds/:addId' element={<SingleAddPage />} /> */}
        <Route path='/addshop' element={<AddShop />} />
        <Route
          path='/shops'
          element={ctx.isUserLoggedIn ? <Shops /> : <Navigate to={'/login'} />}
        />
        <Route path='/shops/:shopId' element={<SingleShopPage />} />
        {/* pasiekiamas tik neprisijugusiems */}
        {!ctx.isUserLoggedIn && <Route path='/login' element={<Login />} />}
        {!ctx.isUserLoggedIn && (
          <Route path='/register' element={<Register />} />
        )}
        <Route
          path='*'
          element={
            <div>
              <h1>404</h1>
              <p>page not found</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
