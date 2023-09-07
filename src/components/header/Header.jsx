import HeaderStyle from '../header/Header.module.css';
import { FaDiceD20 } from 'react-icons/fa';
import { useAuth } from '../../store/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
function Header(props) {
  function logoutFire() {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success('You have logged out');
      })
      .catch((error) => {
        // An error happened.
        console.log('error ===', error);
      });
  }
  const ctx = useAuth();
  return (
    <div>
      <nav className={HeaderStyle.headerNavBar}>
        <div>
          <span className={HeaderStyle.headerTitle}>
            ShopExpress
            <FaDiceD20 />
          </span>
        </div>
        <div>
          <a className={HeaderStyle.headerLink} href='/shops'>
            Shops
          </a>
          {ctx.isUserLoggedIn == true ? (
            <a className={HeaderStyle.headerLink} href='/addShop'>
              Add Shop
            </a>
          ) : null}
          <a className={HeaderStyle.headerLink} href='/register'>
            Register
          </a>
          {!ctx.isUserLoggedIn ? (
            <a className={HeaderStyle.headerLink} href='/login'>
              Login
            </a>
          ) : (
            <a className={HeaderStyle.headerLink} onClick={logoutFire}>
              Logout
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
