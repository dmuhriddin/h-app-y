import Styles from "./technology.module.css";
import technologyImg from "../../assets/technogy-img.png";

function Technology() {
  return (
    <section className={Styles.technology}>
      <div className="container">
        <div className={Styles.technology_container}>
          <div className={Styles.technology_left}>
            <h4 className="subtitle">Technology</h4>
            <h2 className="title">
              Use H(app)y to give your digital photos some pop.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>

          <div className={Styles.technology_right}>
            <img src={technologyImg} alt="phone img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
