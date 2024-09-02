import Styles from "./mode.module.css";
import modeImg from "../../assets/mode-img.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

function Mode() {
  return (
    <section className={Styles.mode}>
      <h4 className="subtitle">Dark mode</h4>
      <h2 className="title">Also available in dark.</h2>
      <p>
        Don't get blinded when using the H(app)y app at night, just turn off the
        lights. Lorem ipsum dolor sit amet.
      </p>
      <img src={modeImg} alt="mode phone" />
      <div className={Styles.mode_bottom}>
        <div className={Styles.mode_icon}>
          <img src={sunIcon} alt="sun" />
          <h4>Light Mode</h4>
        </div>

        <div className={Styles.mode_icon}>
          <img src={moonIcon} alt="moon" />
          <h4>Dark mode</h4>
        </div>
      </div>
    </section>
  );
}

export default Mode;
