import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './store/AuthProvider';
import { Toaster } from 'react-hot-toast';
import AddShop from './components/addShop/AddShop';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Shops from './components/shops/Shops';

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
