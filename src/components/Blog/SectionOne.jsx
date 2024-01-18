import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./assets/blog.css";
import { BlogCategory, blogBlurbs } from "./assets/blogData";
import { Link } from "react-router-dom";


const SectionOne = () => {
  return (
    <div className="sOneBlogContainer">
      {/* <Navbar /> */}
      <h1 className="sOneBlogHero">Latest News</h1>
      <div className="sOneBlog">
        <div className="sOneBlogBlurbs">
          {blogBlurbs.map((data, index) => (
            <Link
              to={`/blog/${index}`}
              key={index}
              className="sOneBlogCardLink"
            >
              <div key={index} className="sOneBlogCard">
                <img className="sOneBlogCardImg" src={data.img} alt="" />
                <span className="sOneBlogCardHeader">{data.category}</span>
                <h1 className="sOneBlogCardText">{data.header}</h1>
                <div className="sOneBlogCardSub">
                  <p className="sOneBlogCardDate">{data.date}</p>
                  <p className="sOneBlogCardAuthor">
                    by{" "}
                    <span className="sOneBlogCardAuthorSpan">
                      {data.authorFirstName}
                    </span>
                  </p>
                  <button className="sOneBlogCardBtn">Read More</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="sOneBlogFeature">
          <div className="oneBlogInputContainer">
            <input
              className="sOneBlogInput"
              type="text"
              placeholder="Your Keyword..."
            />
          </div>
          <div className="oneBlogCatContainer">
            <h1 className="oneBlogCatTop">CATEGORIES</h1>
            {BlogCategory.map((data, index) => (
              <div key={index} className="oneBlogCatContainerItems">
                <p className="oneBlogCatItems">{data.text}</p>
                <div className="oneBlogCatLine"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SectionOne;
