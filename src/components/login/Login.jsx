import GoogleLogin from '../../auth/GoogleLogin';
import LoginForm from '../../auth/LoginPage';
import LoginStyle from '../login/Login.module.css';

function Login() {
  return (
    <div className='container'>
      <div className={LoginStyle.container}>
        <h1 className={LoginStyle.loginTitle}>Login with email and password</h1>
        <LoginForm />
        <GoogleLogin />
      </div>
    </div>
  );
}

export default Login;
