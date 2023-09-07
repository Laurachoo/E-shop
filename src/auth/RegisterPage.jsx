import { useFormik } from 'formik';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(255).required(),
    }),
    onSubmit: (values) => {
      console.log('supildytos reiksmes ===', values);
      registerWithFire(values.email, values.password);
    },
  });

  function registerWithFire(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Registration successful, Welcome!');
        // ...
        navigate('/', { replace: true });
      })
      .catch((error) => {
        toast.error('Registration failed, check email or password');
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn({ errorCode, errorMessage });
      });
  }

  return (
    <div className='border border-slate-500 p-8 shadow-md rounded-sm'>
      <form onSubmit={formik.handleSubmit} className='max-w-xs'>
        <div className='mb-2'>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className='border border-slate-500 px-4 py-2 w-full rounded-md'
            type='text'
            id='email'
            placeholder='Email'
          />
          {formik.errors.email && formik.touched.email && (
            <p className='text-md text-red-500 '>{formik.errors.email}</p>
          )}
        </div>
        <div className='mb-2'>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className='border border-slate-500 px-4 py-2 w-full rounded-md'
            type='password'
            id='password'
            placeholder='Password'
          />
          {formik.errors.password && formik.touched.password && (
            <p className='text-md text-red-500 '>{formik.errors.password}</p>
          )}
        </div>
        <button
          className='border border-slate-500 px-4 py-2 rounded-md'
          type='submit'
        >
          Register
        </button>
      </form>
    </div>
  );
}
