import "./memberStories.scss";
import image1 from "../../assets/zab-consulting-QTXAXnJA3oY-unsplash 20.svg";
import image2 from "../../assets/zab-consulting-QTXAXnJA3oY-unsplash 3.svg";
import image3 from "../../assets/zab-consulting-QTXAXnJA3oY-unsplash 9.svg";
import image4 from "../../assets/zab-consulting-QTXAXnJA3oY-unsplash 2.svg";
const MemberStories = () => {
  return (
    <div className="memberStories_container">
      <div className="memberStories_container_heading">Member stories</div>
      <div className="memberStories_section">
        <div className="memberStories_section_item">
          <section className="memberStories_section_item_left_section">
            <img src={image1} alt="" />
          </section>
          <section className="memberStories_section_item_right_section">
            <div>John’s Story</div>

            <p>
              Non arcu risus quis varius quam quisque. Ornare suspendisse sed
              nisi lacus. Eu feugiat pretium nibh
            </p>
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>

        <div className="memberStories_section_item">
          <section className="memberStories_section_item_left_section">
            <img src={image3} alt="" />
          </section>
          <section className="memberStories_section_item_right_section">
            <div>The Journey</div>

            <p>
              Proin nibh nisl condimentum id venenatis a condimentum vitae
              sapien. Tellus in metus vulputate eu sc
            </p>
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>

        <div className="memberStories_section_item">
          <section className="memberStories_section_item_left_section">
            <img src={image2} alt="" />
          </section>
          <section className="memberStories_section_item_right_section">
            <div>Catch Day</div>

            <p>
              Elit pellentesque habitant morbi tristique senectus et netus et.
              In hendrerit gravida rutrum quisque
            </p>
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>
        <div className="memberStories_section_item">
          <section className="memberStories_section_item_left_section">
            <img src={image4} alt="" />
          </section>
          <section className="memberStories_section_item_right_section">
            <div>Trout Tales</div>

            <p>
              Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu
              dictum varius. Volutpat commodo sed
            </p>
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>
      </div>
      {/* small device */}

      <div className="small_section_container">
        <hr />
        <div className="small_section_item">
          <section className="small_section_heading">
            <div>John’s Story</div>
          </section>
          <section className="small_section_center">
            <img src={image1} alt="" />
            <p>
              Non arcu risus quis varius quam quisque. Ornare suspendisse sed
              nisi lacus. Eu feugiat pretium nibh
            </p>
          </section>
          <section className="small_section_action_item">
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>
        <hr />
        <div className="small_section_item">
          <section className="small_section_heading">
            <div>The Journey</div>
          </section>
          <section className="small_section_center">
            <img src={image3} alt="" />

            <p>
              Proin nibh nisl condimentum id venenatis a condimentum vitae
              sapien. Tellus in metus vulputate eu sc
            </p>
          </section>
          <section className="small_section_action_item">
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>
        <hr />
        <div className="small_section_item">
          <section className="small_section_heading">
            <div>Catch Day</div>
          </section>
          <section className="small_section_center">
            <img src={image2} alt="" />
            <p>
              Elit pellentesque habitant morbi tristique senectus et netus et.
              In hendrerit gravida rutrum quisque
            </p>
          </section>
          <section className="small_section_action_item">
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>
        <hr />
        <div className="small_section_item">
          <section className="small_section_heading">
            <div>Trout Tales</div>
          </section>
          <section className="small_section_center">
            <img src={image4} alt="" />
            <p>
              Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu
              dictum varius. Volutpat commodo sed
            </p>
          </section>
          <section className="small_section_action_item">
            <div>
              <button>Read more</button>
            </div>
          </section>
        </div>
        <hr />
      </div>
      <hr />
    </div>
  );
};

export default MemberStories;
