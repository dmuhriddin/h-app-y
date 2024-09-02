import { FAQData } from "../../constants";
import { FAQDataTypes } from "../../types";
import Styles from "./faq.module.css";

function Faq() {
  return (
    <section className={Styles.faq}>
      <div className="container">
        <div className={Styles.faq_header}>
          <h2>FAQ</h2>
          <h5>Some questions & some answers</h5>
        </div>

        <ul className={Styles.faq_list}>
          {FAQData &&
            FAQData.map((item: FAQDataTypes) => (
              <li className={Styles.faq_item}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
