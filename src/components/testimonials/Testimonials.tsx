import { testimonialsData } from "../../constants";
import { testimonialsDataTypes } from "../../types";
import Styles from "./testimonials.module.css";

function Testimonials() {
  return (
    <section className={Styles.testimonials}>
      <div className={Styles.testimonials_header}>
        <h4 className="subtitle">Testimonials</h4>
        <h2 className="title">Don't take our word for it.</h2>
        <p>See what our customers are saying.</p>
      </div>

      <ul className={Styles.testimonials_cards}>
        {testimonialsData &&
          testimonialsData.map((item: testimonialsDataTypes) => (
            <li key={item.title} className={Styles.testimonials_card}>
              <p>{item.description}</p>
              <div className={Styles.testimonials_avatar}>
                <img src={item.avatar} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <h4>Dunder Mifflin</h4>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Testimonials;
