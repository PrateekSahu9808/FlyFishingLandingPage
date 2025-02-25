import "./featured.scss";
import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";
import fishImage from "../../assets/domie-sharpin-XLqQLrkuBkI-unsplash 2.svg";
import imgs1 from "../../assets/domie-sharpin-XLqQLrkuBkI-unsplash s1.svg";
import imgs2 from "../../assets/domie-sharpin-XLqQLrkuBkI-unsplash s2.svg";
import imgs3 from "../../assets/domie-sharpin-XLqQLrkuBkI-unsplash s3.svg";

const FeaturedOptions = () => {
  return (
    <div className="featuredOptions_wrapper">
      <div className="featuredOptions_container">
        <h2 className="featuredOptions_heading">Featured options</h2>

        {/* Large Screen Section */}
        <div className="large-screen">
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
                sapien. Tellus in metus vulputate eu sc.
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

        {/* Small Screen Section */}
        <div className="small-screen">
          <div className="featured_card">
            <img src={imgs1} alt="Fishing Image 1" className="featured_image" />
            <div className="featured_overlay">
              <h3>Explore Fly Fishing</h3>
              <p>
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc.
              </p>
              <button>Learn more</button>
            </div>
          </div>

          <div className="featured_card">
            <img src={imgs2} alt="Fishing Image 2" className="featured_image" />
            <div className="featured_overlay">
              <h3>Fly Fishing Experiences</h3>
              <p>
                Elit pellentesque habitant morbi tristique senectus et netus et.
                In hendrerit gravida rutrum quisque.
              </p>
              <button>Learn more</button>
            </div>
          </div>

          <div className="featured_card">
            <img src={imgs3} alt="Fishing Image 3" className="featured_image" />
            <div className="featured_overlay">
              <h3>Gear Up and Catch More</h3>
              <p>
                In metus vulputate eu scelerisque felis imperdiet. Nunc
                scelerisque viverra mauris in aliquam sem.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOptions;
