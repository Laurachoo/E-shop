import { useFormik } from 'formik';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import RegisterPageStyle from '../auth/RegisterPage.module.css';

export default function RegisterForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email must be valid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50)
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      registerWithFire(values.email, values.password);
    },
  });

  function registerWithFire(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Registration successful');
        navigate('/', { replace: true });
      })
      .catch(() => {
        toast.error('Registration failed');
      });
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            className={RegisterPageStyle.inputOne}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='text'
            id='email'
            placeholder='Email'
          />
          {formik.errors.email && formik.touched.email && (
            <p className={RegisterPageStyle.error}>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <input
            className={RegisterPageStyle.inputTwo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            id='password'
            placeholder='Password'
          />
          {formik.errors.password && formik.touched.password && (
            <p className={RegisterPageStyle.error}>{formik.errors.password}</p>
          )}
        </div>
        <button className={RegisterPageStyle.registerButton} type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
