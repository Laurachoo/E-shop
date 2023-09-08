import { useFormik } from 'formik';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import RegisterStyle from '../auth/Register.module.css';

export default function RegisterForm() {
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
            className={RegisterStyle.input}
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
            className={RegisterStyle.input}
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
        <button className={RegisterStyle.registerButton} type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
