import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../store/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { FaBity } from 'react-icons/fa';
import { FaStream } from 'react-icons/fa';
import HeaderStyle from '../header/Header.module.css';
import Sidebar from '../../components/header/Sidebar';

function OneLink(props) {
  return (
    <NavLink
      onClick={props.onClick}
      className={({ isActive, isPending }) =>
        isPending
          ? HeaderStyle.pending
          : isActive
          ? HeaderStyle.active
          : HeaderStyle.headerLink
      }
      to={props.to}
    >
      {props.title}
    </NavLink>
  );
}

function logoutFire() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      toast.success('You have logged out');
    })
    .catch((error) => {
      console.warn(error);
    });
}

function Header() {
  const ctx = useAuth();
  return (
    <div id='outer-container'>
      <Sidebar />

      <nav id='page-wrap' className={HeaderStyle.headerNavBar}>
        <Link className={HeaderStyle.headerTitleLink} to={'/'}>
          <div className={HeaderStyle.headerIconAndTitle}>
            <span className={HeaderStyle.headerIcon}>
              <FaBity size={'50px'} />
            </span>
            <span className={HeaderStyle.headerTitle}>Sound Spectrum</span>
          </div>
        </Link>
        <div className={HeaderStyle.headerLinks}>
          {ctx.isUserLoggedIn && (
            <>
              <OneLink to={'/shops'} title={'Shops'} />

              <OneLink to={'/addshop'} title={'Create Shop'} />
            </>
          )}
          {ctx.isUserLoggedIn === false && (
            <OneLink to={'/login'} title={'Login'} />
          )}
          {ctx.isUserLoggedIn === false && (
            <OneLink to={'/register'} title={'Register'} />
          )}
          {ctx.isUserLoggedIn && (
            <OneLink onClick={logoutFire} to={'/login'} title={'Logout'} />
          )}
        </div>
        {ctx.isUserLoggedIn && (
          <p className={HeaderStyle.headerEmail}>
            <b>Currently logged in as</b>
            <br />
            {ctx.email}
          </p>
        )}
      </nav>
    </div>
  );
}

export default Header;
