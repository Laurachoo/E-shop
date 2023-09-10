import GoogleLogin from '../../auth/GoogleLogin';
import LoginForm from '../../auth/LoginPage';
import HomepageStyle from '../homepage/Homepage.module.css';

function Homepage() {
  return (
    <div>
      <div className={HomepageStyle.heroSection}>
        <h3 className={HomepageStyle.heroTitleStart}>Welcome to</h3>
        <h1 className={HomepageStyle.heroTitleEnd}>Sound Spectrum</h1>
        <p className={HomepageStyle.heroDescription}>
          A place to browse thousands of music stores.
        </p>
      </div>
      <section className={HomepageStyle.sectionOne}>
        <p className={HomepageStyle.sectionOneParagraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eos
          molestiae soluta perferendis quibusdam incidunt beatae quae quisquam
          ad id nemo, libero veritatis numquam neque reiciendis, eius illo
          officia temporibus.
        </p>
        <img
          className={HomepageStyle.loopkitImg}
          src='../public/loopkit.webp'
          alt='Loopkit'
        />
      </section>
    </div>
  );
}

export default Homepage;
