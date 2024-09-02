import Styles from "./hero.module.css";
import logo from "../../assets/header-logo.svg";
import heroPhoneImg from "../../assets/hero-phone-img.png";

function Hero() {
  return (
    <div className={Styles.hero}>
      <div className="container">
        <div className={Styles.hero_container}>
          <div className={Styles.hero_left}>
            <img src={logo} alt="hero logo" />
            <h1>The future of digital photos.</h1>
            <p>
              The H(app)y app is the latest & greatest in phone photography.
              It's available in the App Store right now. Go check it out!
            </p>
            <div className={Styles.hero_btns}>
              <button className="btn">Download</button>
              <button className="btn">Read More</button>
            </div>
          </div>

          <div className={Styles.hero_right}>
            <img src={heroPhoneImg} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
