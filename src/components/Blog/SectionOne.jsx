import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BlogCard from "../ReusedComponents/BlogCard";
import FreeSolo from "../ReusedComponents/SearchInput";
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
              style={{ textDecoration: "none" }}
            >
              <BlogCard
                authorFirstName={data.authorFirstName}
                header={data.header}
                date={data.date}
                img={data.img}
                category={data.category}
                like={data.like}
              />
            </Link>
          ))}
        </div>
        <div className="sOneBlogFeature">
          <FreeSolo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SectionOne;
