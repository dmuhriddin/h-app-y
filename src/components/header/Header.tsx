import Styles from "./header.module.css";
import logo from "../../assets/header-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="container">
        <div className={Styles.header_container}>
          <a href="/" className={Styles.header_brand}>
            <img src={logo} alt="header logo" />
          </a>

          <nav>
            {isOpen ? (
              <IoClose
                className={Styles.close_icon}
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <RxHamburgerMenu
                className={Styles.menu_icon}
                onClick={() => setIsOpen(true)}
              />
            )}
            <ul
              className={`${Styles.header_navigation} ${
                isOpen ? Styles.active : ""
              }`}
            >
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
              <li>
                <button className="btn">Get Template</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
