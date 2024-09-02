import { statisticsData } from "../../constants";
import { statisticsDataTypes } from "../../types";
import Styles from "./statistics.module.css";

function Statistics() {
  return (
    <div className={Styles.statistics}>
      <div className="container">
        <ul className={Styles.statistics_list}>
          {statisticsData &&
            statisticsData.map((item: statisticsDataTypes) => (
              <li className={Styles.statistics_item}>
                <h2>{item.number}</h2>
                <p>{item.title}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Statistics;
