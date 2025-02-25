import fishIcon from "../../assets/fish.svg";
import manuBar from "../../assets/Right side.svg";
import "./header.scss";
const Header = () => {
  return (
    <header className="header_container">
      <div className="header_left_section">
        <span>
          <img src={fishIcon} alt="" />
        </span>
        <span className="header_text_content">Central Texas Fly Fishing</span>
      </div>
      <nav className="header_right_section">
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="manu_bar">
        <img src={manuBar} />
      </div>
    </header>
  );
};

export default Header;
