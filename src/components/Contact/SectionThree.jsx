const SectionThree = () => {
  return (
    <div className="sThreeContactContainer">
      <div className="sThreeContactTopInputs">
        <input
          className="sThreeContactTopInput"
          type="text"
          placeholder="First Name"
        />
        <input
          type="text"
          className="sThreeContactTopInput"
          placeholder="Last Name"
        />
        <input
          type="email"
          className="sThreeContactTopInput"
          placeholder="Email"
        />
        <input
          type="text"
          className="sThreeContactTopInput"
          placeholder="Phone Number"
        />
      </div>
      <div className="sThreeContactMidInputs">
        <input
          type="text"
          className="sThreeContactMidInput"
          placeholder="Your Company Name"
        />
      </div>

      <div className="sThreeContactSelectors">
        <div className="custom-select" style={{ width: "200px" }}>
          <select>
            <option value="0">What is your role</option>
            <option value="1">CEO</option>
            <option value="1">MD</option>
            <option value="2">CTO</option>
            <option value="3">General Manager</option>
            <option value="4">Manager</option>
            <option value="5">Digital Marketer</option>
            <option value="6">Others</option>
          </select>
        </div>
        <div className="sThreeContactMultiSelectors">
          <p>Which Services Are you intrested in ?</p>

          <div className="sThreeContactMultiSelect" action="/action_page.php">
            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1"> Brand & Identity Design</label>
            </div>

            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
              />
              <label htmlFor="vehicle1"> Design Services</label>
            </div>
            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1"> Website Design & Developement</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle4"
                name="vehicle4"
                value="Boat"
              />
              <label htmlFor="vehicle1">Photography & Videography</label>
            </div>
            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">SEO</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Paid Advertisement</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Social Advertising</label>
            </div>
            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Media Planning & Buying</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Social Media</label>
            </div>
            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Influencer Marketing</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Public & Press Relation</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Copyrighting</label>
            </div>
            <div className="each-input">
              {" "}
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">CRM & Marketing Automation</label>
            </div>
            <div className="each-input">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle1">Reputation Management</label>
            </div>
           
          </div>
        </div>
      </div>
      <button className="sThreeContactSubmit">Submit</button>
    </div>
  );
};

export default SectionThree;
