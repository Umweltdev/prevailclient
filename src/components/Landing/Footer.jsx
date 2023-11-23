import {
  AccountTree,
  Addchart,
  ChatRounded,
  CreditCard,
  LocalOffer,
  Score,
  ShoppingCart,
  Wysiwyg,
} from "@mui/icons-material";
import { useState } from "react";

const Footer = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(true);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  return (
    <div>
      <div className="footerContainer">
        <div className="footerSideNavs">
          <div className="footSidebar">
            <h1 className="footerNavsHeaders" onClick={toggleDropDown}>
              <Wysiwyg /> Web Development
            </h1>
          </div>

          {isDropDownVisible && (
            <p className="footerNavItems">
              <p className="footerNavHero">SEO</p>
              <div className="footerNavItemsLine"></div>
              <div className="footNavDropdown">
                <ul className="footNavDropdownUl">
                  <li>
                    <AccountTree
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />{" "}
                    WordPress SEO
                  </li>
                  <li>
                    <ShoppingCart
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />{" "}
                    E-comerce SEO
                  </li>
                  <li>
                    <Addchart
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />{" "}
                    Amazon SEO
                  </li>
                  <li>
                    <CreditCard
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />{" "}
                    Shopify SEO
                  </li>
                </ul>
                <ul className="footNavDropdownUl">
                  <li>
                    <LocalOffer
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />
                    Local SEO
                  </li>
                  <li>
                    <ChatRounded
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />{" "}
                    Seo For Lead Generation
                  </li>
                  <li>
                    <Score
                      style={{ color: "rgb(40, 221, 167)", fontSize: "2.3vw" }}
                    />{" "}
                    Magento SEO
                  </li>
                </ul>
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
