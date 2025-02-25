import "./centralTexas.scss";
import flyFishing from "../../assets/domie-sharpin-XLqQLrkuBkI-unsplash 1.svg";
const CentralTexas = () => {
  return (
    <div className="centralTexas_container">
      <section className="centralTexas_leftSection">
        <div>
          <span>Central Texas</span>
          <span>Fly Fishing</span>
        </div>

        <p>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <span className="centralTexas_leftSection_button ">
          <button>Get started</button>
        </span>
      </section>
      <section className="centralTexas_rightSection">
        <img src={flyFishing} alt="" />
      </section>
    </div>
  );
};

export default CentralTexas;
