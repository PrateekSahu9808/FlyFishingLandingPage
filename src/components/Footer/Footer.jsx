import fishIcon from "../../assets/Logo.svg";
import fbIcon from "../../assets/fbButton.svg";
import instaIcon from "../../assets/instaButton.svg";
import linIcon from "../../assets/lin.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="footer_container">
        <div className="footer_action_items_container">
          <section className="footer_action_items">
            <div>
              <img src={fishIcon} alt="" />
            </div>
            <div className="footer_action_items_query">
              <a href="">FAQ</a>
              <a href="">Privacy</a>
              <a href="">Support</a>
              <a href="">Contact</a>
            </div>
          </section>
          <section className="footer_action_social_items">
            <img src={fbIcon} alt="" />
            <img src={instaIcon} alt="" />
            <img src={linIcon} alt="" />
          </section>
        </div>
        <div className="footer_content">
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
