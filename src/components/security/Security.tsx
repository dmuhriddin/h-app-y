import Style from "./security.module.css";
import securityImg from "../../assets/security-img.png";

function Security() {
  return (
    <section className={Style.security}>
      <div className="container">
        <div className={Style.security_container}>
          <div className={Style.security_left}>
            <img src={securityImg} alt="security phone img" />
          </div>

          <div className={Style.security_right}>
            <h4 className="subtitle">Speed & security</h4>
            <h2 className="title">State-of-the-art processing capabilities.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
