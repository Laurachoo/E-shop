import RegisterStyle from '../register/Register.module.css';
import RegisterForm from '../../auth/RegisterPage';
import GoogleLogin from '../../auth/GoogleLogin';

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
