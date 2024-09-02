import { FaApple } from "react-icons/fa";
import Styles from "./download.module.css";

function Download() {
  return (
    <section className={Styles.downlaod}>
      <h4 className="subtitle">Download</h4>
      <h2 className="title">It's available right now!</h2>
      <p>
        Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in
        convallis risus egestas non.
      </p>
      <button>
        <FaApple className={Styles.icon} />
        <div>
          <p>Download on the</p>
          <h4>App Store</h4>
        </div>
      </button>
    </section>
  );
}

export default Download;
