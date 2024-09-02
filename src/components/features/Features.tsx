import { featuresData } from "../../constants";
import { featuresDataTypes } from "../../types";
import Styles from "./features.module.css";
function Features() {
  return (
    <div className={Styles.features}>
      <div className="container">
        <div className={Styles.features_container}>
          <div className={Styles.features_header}>
            <h4 className="subtitle">Features</h4>
            <h2 className="title">
              The latest & greatest in phone photography.
            </h2>
          </div>

          <ul className={Styles.features_cards}>
            {featuresData &&
              featuresData.map((item: featuresDataTypes) => (
                <li className={Styles.features_card}>
                  <div className={Styles.features_card_img}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className={Styles.features_card_icon}>
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className={Styles.features_card_body}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
