import { FaMailBulk } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import FooterStyle from '../footer/Footer.module.css';

function Footer() {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.contactContainer}>
        <span className={FooterStyle.containerTitle}>Contact us</span>
        <div className={FooterStyle.footerContact}>
          <span className={FooterStyle.footerIcon}>
            <FaMailBulk />
          </span>
          <span className={FooterStyle.containerDescription}>
            support@soundspectrum.com
          </span>
        </div>
        <div className={FooterStyle.footerContact}>
          <span className={FooterStyle.footerIcon}>
            <FaPhone />
          </span>
          <span className={FooterStyle.containerDescription}>
            +123 752 86943
          </span>
        </div>
        <div className={FooterStyle.footerContact}>
          <span className={FooterStyle.footerIcon}>
            <FaInstagramSquare />
          </span>
          <span className={FooterStyle.containerDescription}>
            Sound Spectrum
          </span>
        </div>
      </div>
      <div className={FooterStyle.informationContainer}>
        <span className={FooterStyle.containerDescription}>
          <b>© All rights reserved</b>
        </span>
      </div>
      <div className={FooterStyle.locationContainer}>
        <span className={FooterStyle.containerTitle}>Location</span>
        <span className={FooterStyle.containerDescription}>
          Sound Spectrum Inc.
          <br />
          2347 Hamilton Avenue San Jose,
          <br />
          California 95125
        </span>
      </div>
    </div>
  );
}

export default Footer;
