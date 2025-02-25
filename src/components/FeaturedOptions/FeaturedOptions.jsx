import "./featured.scss";
import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";
import fishImage from "../../assets/domie-sharpin-XLqQLrkuBkI-unsplash 2.svg";
const FeaturedOptions = () => {
  return (
    <div className="featuredOptions_wrapper">
      <div className="featuredOptions_container">
        <div className="featuredOptions_heading">Featured options</div>
        <div className="explore_fly_fishing">
          <div>Explore Fly Fishing</div>
          <img src={upArrow} alt="" />
        </div>
        <hr />
        <div className="explore_fly_fishing_center">
          <section className="explore_fly_fishing_center_left_section">
            <img src={fishImage} alt="" />
          </section>
          <section className="explore_fly_fishing_center_right_section">
            <div>Explore Fly Fishing</div>

            <p>
              Proin nibh nisl condimentum id venenatis a condimentum vitae
              sapien. Tellus in metus vulputate eu sc
            </p>
            <div>
              <button>Learn more</button>
            </div>
          </section>
        </div>
        <div className="explore_fly_fishing">
          <div>Fly Fishing Experiences</div>
          <img src={downArrow} alt="" />
        </div>
        <hr />
        <div className="explore_fly_fishing">
          <div>Gear Up and Catch More</div>
          <img src={downArrow} alt="" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FeaturedOptions;
