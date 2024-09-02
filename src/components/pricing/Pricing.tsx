import { pricingData } from "../../constants";
import { pricingDataTypes } from "../../types";
import Styles from "./pricing.module.css";

function Pricing() {
  return (
    <section className={Styles.pricing}>
      <div className="container">
        <div className={Styles.picing_header}>
          <h4 className="subtitle">Pricing</h4>
          <h2 className="title">A plan for every need.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus.
          </p>
        </div>

        <ul className={Styles.pricing_cards}>
          {pricingData &&
            pricingData.map((item: pricingDataTypes) => (
              <li key={item.deadline} className={Styles.pricing_card}>
                <h4>{item.definition}</h4>
                <h2>${item.price}</h2>
                <h5>{item.deadline}</h5>
                <button className="btn">Buy Now</button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Pricing;
