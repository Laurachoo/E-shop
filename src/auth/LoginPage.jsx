import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoginPageStyle from '../auth/LoginPage.module.css';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(50)
    .required('Password is required'),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginWithFire(values.email, values.password);
    },
  });

  function loginWithFire(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Welcome');
        navigate('/shops', { replace: true });
      })
      .catch(() => {
        toast.error('Login failed');
      });
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            className={LoginPageStyle.inputOne}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='text'
            id='email'
            placeholder='Email'
          />
          {formik.touched.email && formik.errors.email && (
            <div className={LoginPageStyle.error}>{formik.errors.email}</div>
          )}
        </div>
        <div className={LoginPageStyle.passwordInput}>
          <input
            className={LoginPageStyle.inputTwo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            id='password'
            placeholder='Password'
          />
          {formik.touched.password && formik.errors.password && (
            <div className={LoginPageStyle.error}>{formik.errors.password}</div>
          )}
        </div>
        <button className={LoginPageStyle.loginButton} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}
