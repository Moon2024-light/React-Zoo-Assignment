import styles from "./footer.module.css";
import twitterLogo from "../../assets/images/twitter-logo.svg";
import instagramLogo from "../../assets/images/instagram-logo.svg";
import facebookLogo from "../../assets/images/facebook-logo.svg"; 

export const Footer = () => {
  return (
    <footer className={styles.footer}>
    
      <div className={styles.contacts}>
        <h4>Contact: +46 889076549</h4>
        <h4>Email: contact@Zoo.com</h4>
      </div>
      <div className={styles.more}>
        <h4>About Us</h4>
        <button>Know More</button>
      </div>
      <div className={styles.socials}>
        <h4>Follow Us</h4>
        <div className={styles.iconRow}>
          <img src={facebookLogo} alt="Facebook" className={styles.socialIcon} />
          <img src={instagramLogo} alt="Instagram" className={styles.socialIcon} />
          <img src={twitterLogo} alt="Twitter" className={styles.socialIcon} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;