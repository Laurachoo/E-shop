import HeaderStyle from '../header/Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FaDiceD20 } from 'react-icons/fa';
import { useAuth } from '../../store/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';

function OneLink(props) {
  return (
    <NavLink
      onClick={props.onClick}
      className={HeaderStyle.headerTitle}
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
      // Sign-out successful.
      toast.success('You have logged out');
    })
    .catch((error) => {
      // An error happened.
      console.log('error ===', error);
    });
}
//   return (
//     <div>
//       <nav className={HeaderStyle.headerNavBar}>
//         <div>
//           <span className={HeaderStyle.headerTitle}>
//             ShopExpress
//             <FaDiceD20 />
//           </span>
//         </div>
//         <div>
//           <a className={HeaderStyle.headerLink} href='/shops'>
//             Shops
//           </a>
//           {ctx.isUserLoggedIn ? (
//             <a className={HeaderStyle.headerLink} href='/addshop'>
//               Add Shop
//             </a>
//           ) : null}
//           {!ctx.isUserLoggedIn ? (
//             <>
//               <a className={HeaderStyle.headerLink} href='/register'>
//                 Register
//               </a>

//               <a className={HeaderStyle.headerLink} href='/login'>
//                 Login
//               </a>
//             </>
//           ) : (
//             <a className={HeaderStyle.headerLink} onClick={logoutFire}>
//               Logout
//             </a>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }
function Header() {
  // atvaizduoti prisijungusio userio email is conteksto
  const ctx = useAuth();
  console.log('ctx ===', ctx);
  return (
    <div>
      <nav className={HeaderStyle.headerNavBar}>
        <Link className='text-2xl' to={'/'}>
          <div>
            <span className={HeaderStyle.headerTitle}>
              ShopExpress
              <FaDiceD20 />
            </span>
          </div>
        </Link>
        <OneLink to={'/shops'} title={'Shops'} />
        {ctx.isUserLoggedIn && (
          <>
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
        {ctx.isUserLoggedIn && (
          <p className='inline-block text-lg px-3 py-2'>{ctx.email}</p>
        )}
      </nav>
    </div>
  );
}

export default Header;
