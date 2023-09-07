import GoogleLogin from '../../auth/GoogleLogin';
import LoginForm from '../../auth/LoginPage';

function Login() {
  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>Login with email and password</h1>
      <LoginForm />
      <GoogleLogin />
    </div>
  );
}

export default Login;
