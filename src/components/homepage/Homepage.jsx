import GoogleLogin from '../../auth/GoogleLogin';
import LoginForm from '../../auth/LoginPage';
import HomepageStyle from '../homepage/Homepage.module.css';

function Homepage() {
  return (
    <div className={HomepageStyle.container}>
      <div className={HomepageStyle.heroSection}>
        <h3 className={HomepageStyle.heroTitleStart}>Welcome to</h3>
        <h1 className={HomepageStyle.heroTitleEnd}>Sound Spectrum</h1>
        <p className={HomepageStyle.heroDescription}>
          A place to browse thousands of music stores.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
