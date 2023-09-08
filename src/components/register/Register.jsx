import RegisterForm from '../../auth/RegisterPage';
import GoogleLogin from '../../auth/GoogleLogin';
import RegisterStyle from '../register/Register.module.css';

function Register() {
  return (
    <div className={RegisterStyle.container}>
      <h1 className={RegisterStyle.registerTitle}>
        Register with email and password
      </h1>
      <RegisterForm />
      <GoogleLogin />
    </div>
  );
}

export default Register;
