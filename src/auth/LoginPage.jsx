import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoginPageStyle from '../auth/LoginPage.module.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(5).max(50).required(),
    }),
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
            className={LoginPageStyle.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='text'
            id='email'
            placeholder='Email'
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <input
            className={LoginPageStyle.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            id='password'
            placeholder='Password'
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <button className={LoginPageStyle.loginButton} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}
