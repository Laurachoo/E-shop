import RegisterStyle from '../register/Register.module.css';
import RegisterForm from '../../auth/RegisterPage';
import GoogleLogin from '../../auth/GoogleLogin';
function Register() {
  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>Login with email and password</h1>
      <RegisterForm />
      <GoogleLogin />
    </div>
  );
}

export default Register;
