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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="sThreeContactSelectors"
      >
        {/* <p>Which Services Are you intrested in ?</p> */}
        <div className="custom-select" style={{ width: "300px" }}>
          <p style={{ width: "30vw" }}>Which Services Are you intrested in ?</p>
          <select>
            {/* <option value="0">Which Services Are you intrested in ?</option> */}
            <option value="1">Brand & Identity Design</option>
            <option value="1">Design Services</option>
            <option value="2">Website Design & Developement</option>
            <option value="3">Photography & Videography</option>
            <option value="4">SEO</option>
            <option value="5">Paid Advertisement</option>
            <option value="6">Social Advertising</option>
            <option value="7">Media Planning & Buying</option>
            <option value="8">Social Media</option>
            <option value="9">Influencer Marketing</option>
            <option value="10">Public & Press Relation</option>
            <option value="11">Copyrighting</option>
            <option value="12">CRM & Marketing Automation</option>
            <option value="13">Reputation Management</option>
          </select>
        </div>
        {/* <div className="sThreeContactMultiSelectors">
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
        </div> */}
      </div>
      <button className="sThreeContactSubmit">Submit</button>
    </div>
  );
};

export default SectionThree;
