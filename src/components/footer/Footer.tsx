import Styles from "./footer.module.css";
import footerLogo from "../../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className={Styles.footer}>
      <img src={footerLogo} alt="footer logo" />
      <ul className={Styles.footer_icons}>
        <li className={Styles.footer_icon}>
          <a href="#">
            <FaTwitter className={Styles.icon} />
          </a>
        </li>

        <li className={Styles.footer_icon}>
          <a href="#">
            <FaInstagram className={Styles.icon} />
          </a>
        </li>

        <li className={Styles.footer_icon}>
          <a href="#">
            <FaFacebook className={Styles.icon} />
          </a>
        </li>
      </ul>

      <p>
        Powered by <span>Webflow</span> . All rights reserved by Happy Apps,
        Inc. <span>Licensing</span> .
      </p>
    </section>
  );
}

export default Footer;
