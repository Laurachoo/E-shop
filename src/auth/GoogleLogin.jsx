import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { googleProvider } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import GoogleLoginStyle from '../auth/GoogleLogin.module.css';

export default function GoogleLogin() {
  const navigate = useNavigate();
  function authWithGoogle() {
    const auth = getAuth();

    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success('Welcome');
        navigate('/shops', { replace: true });
      })
      .catch((error) => {
        console.warn('error ===', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <>
      <h3 className={GoogleLoginStyle.title}>Login or register with Google</h3>
      <button
        className={GoogleLoginStyle.googleButton}
        onClick={authWithGoogle}
      >
        <FcGoogle size={35} />
      </button>
    </>
  );
}
