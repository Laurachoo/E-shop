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
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log('credential ===', credential);
        // ...
      });
  }

  return (
    <>
      <h3>(Register/Login) with Google</h3>
      <button onClick={authWithGoogle}>
        <FcGoogle size={35} />
      </button>
    </>
  );
}
