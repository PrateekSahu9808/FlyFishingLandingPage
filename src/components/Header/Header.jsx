import fishIcon from "../../assets/fish.svg";
import "./header.scss";
const Header = () => {
  return (
    <header className="header_container">
      <div className="header_left_section">
        <span>
          <img src={fishIcon} alt="" />
        </span>
        <span>Central Texas Fly Fishing</span>
      </div>
      <nav className="header_right_section">
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
