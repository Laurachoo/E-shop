import { slide as Menu } from 'react-burger-menu';
import SidebarStyle from '../header/Sidebar.module.css';
import { useAuth } from '../../store/AuthProvider';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { FaBity } from 'react-icons/fa';
function OneLink(props) {
  return (
    <NavLink
      onClick={props.onClick}
      className={({ isActive, isPending }) =>
        isPending
          ? SidebarStyle.pending
          : isActive
          ? SidebarStyle.active
          : SidebarStyle.headerLink
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
function Sidebar(props) {
  const ctx = useAuth();
  return (
    <Menu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
      <Link className={SidebarStyle.headerTitleLink} to={'/'}>
        <div className={SidebarStyle.headerIconAndTitle}>
          <span className={SidebarStyle.headerIcon}>
            <FaBity size={'50px'} />
          </span>
          <span className={SidebarStyle.headerTitle}>Sound Spectrum</span>
        </div>
      </Link>
      <div className={SidebarStyle.headerLinks}>
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
        <p className={SidebarStyle.headerEmail}>
          <b>Currently logged in as</b>
          <br />
          {ctx.email}
        </p>
      )}
    </Menu>
  );
}

export default Sidebar;
