import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './store/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddShop from './components/addShop/AddShop';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Shops from './components/shops/Shops';
import Homepage from './components/homepage/Homepage';

function App() {
  const ctx = useAuth();
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        {ctx.isUserLoggedIn && <Route path='/addshop' element={<AddShop />} />}
        {ctx.isUserLoggedIn && <Route path='/shops' element={<Shops />} />}
        {!ctx.isUserLoggedIn && <Route path='/login' element={<Login />} />}
        {!ctx.isUserLoggedIn && (
          <Route path='/register' element={<Register />} />
        )}
        <Route
          path='*'
          element={
            <div>
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
