import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { googleProvider } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function GoogleLogin() {
  const navigate = useNavigate();
  function authWithGoogle() {
    const auth = getAuth();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
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
      <h3>Login or register with Google</h3>
      <button onClick={authWithGoogle}>
        <FcGoogle size={35} />
      </button>
    </>
  );
}
