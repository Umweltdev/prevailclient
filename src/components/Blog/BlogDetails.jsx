import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { blogBlurbs } from "./assets/blogData";
import "./assets/blog.css";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import FooterNew from "../Footer/FooterNew";
import DrawerAppBar from "../Navbar/Appbar";
import { Grid, Typography } from "@mui/material";
import BlogSideCard from "./BlogSideCard";
import SideBarNews from "./SideBarNews";
import CaseNavigation from "../Portfolio/cases/CaseNavigation";

const BlogDetails = () => {
  const { index } = useParams();

  const currentIndex = parseInt(index, 10);
  const currentBlog = blogBlurbs[currentIndex];

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }

  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  const prevCaseUrl = prevIndex >= 0 ? `/blog/${prevIndex}` : null;
  const nextCaseUrl =
    nextIndex < blogBlurbs.length ? `/blog/${nextIndex}` : null;

  return (
    <div className="sOneBlogContainer">
      <DrawerAppBar />
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "top",
          margin: "25vh 0 0 0",
        }}
      >
        <Grid sx={{ width: "55vw" }}>
          <img className="sOneBlogDetailsImg" src={currentBlog.img} alt="" />
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "top",
              top: "0",
              padding: "4vh 0 0 0",
            }}
          >
            <Typography
              sx={{ fontSize: "1.4vw", width: "35vw", fontWeight: "900" }}
            >
              {currentBlog.header}
            </Typography>
            <div className="sOneBlogDetailsSocils">
              <Facebook
                sx={{
                  fontSize: "1.5vw",
                  borderRadius: "50%",
                  color: "#884ed9",
                }}
              />
              <Twitter
                sx={{
                  fontSize: "1.5vw",
                  borderRadius: "50%",
                  color: "#884ed9",
                }}
              />
              <Instagram
                sx={{
                  fontSize: "1.5vw",
                  borderRadius: "50%",
                  color: "#884ed9",
                }}
              />
              <Email
                sx={{
                  fontSize: "1.5vw",
                  borderRadius: "50%",
                  color: "#884ed9",
                }}
              />
            </div>
          </Grid>
          <Grid sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "1vw",
                margin: "1.2vh 0 0 0",
                webkitFontSmoothing: "antialiased",
                fontWeight: "800",
              }}
            >
              {currentBlog.authorFirstName} | {currentBlog.date}
            </Typography>
          </Grid>
          {/* <h1 className="sOneBlogDetailsHeader">{blog.header}</h1>
          <div className="sOneBlogDetailsInfo">
            <p className="sOneBlogDetailsSpan">{blog.authorFirstName}</p>
            <div className="sOneBlogDetailsLine"></div>
            <p className="sOneBlogDetailsSpan">{blog.date}</p>
          </div> */}

          <p className="sOneBlogDetailsDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            excepturi voluptas illum omnis soluta tempore laboriosam inventore
            dicta. Vitae obcaecati totam labore nobis voluptas fugiat possimus
            ipsum molestiae, alias facilis laudantium, quisquam natus quos,
            eaque ad hic quaerat incidunt facere cumque repudiandae veniam
            minima sint reprehenderit? Sint modi sequi rerum quidem amet eveniet
            inventore, sit tenetur iure asperiores nisi veniam officia quia, vel
            quas! Labore reprehenderit neque eaque saepe consequatur veritatis,
            perspiciatis veniam eligendi odio obcaecati tempore vitae doloribus
            assumenda quo
          </p>

          <p className="sOneBlogDetailsDesc">
            {" "}
            ratione repellendus maiores quasi facere repudiandae? Est
            consequuntur qui optio illum sit suscipit hic nemo earum laudantium
            voluptas. Distinctio, harum tempore. Totam velit ab numquam,
            incidunt eos natus, deleniti at vel fugiat iure eligendi illo
            voluptate officiis non ea laudantium tempora eveniet facilis,
            corporis voluptates. Ducimus at temporibus officia neque cum libero
            nostrum veniam, nemo explicabo rem hic odit deleniti voluptatibus
            provident incidunt eligendi. Repudiandae in, vel nostrum corporis
            sit, repellat mollitia provident, delectus natus ipsum error.
            Aliquam natus doloremque aperiam. Molestiae minus animi debitis
            excepturi iste, voluptate cupiditate repellendus vitae odit
            consectetur! Amet, sit. Beatae aspernatur aut vitae repellat nobis,
            temporibus et ipsa soluta ratione libero
          </p>
          <p className="sOneBlogDetailsDesc">
            Distinctio, harum tempore. Totam velit ab numquam, incidunt eos
            natus, deleniti at vel fugiat iure eligendi illo voluptate officiis
            non ea laudantium tempora eveniet facilis, corporis voluptates.
            Ducimus at temporibus officia neque cum libero nostrum veniam, nemo
            explicabo rem hic odit deleniti voluptatibus provident incidunt
            eligendi. Repudiandae in, vel nostrum corporis sit, repellat
            mollitia provident, delectus natus ipsum error. Aliquam natus
            doloremque aperiam. Molestiae minus animi debitis excepturi iste,
            voluptate cupiditate repellendus vitae odit consectetur! Amet, sit.
            Beatae aspernatur aut vitae repellat nobis, temporibus et ipsa
            soluta ratione libero
          </p>
        </Grid>
        <div className="blogRight">
          {/* <Typography> Up Next:</Typography> */}
          <Grid sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {blogBlurbs.slice(0, 6).map((data, index) => (
              <Link
                to={`/blog/${index}`}
                key={index}
                className="sOneBlogCardLink"
                style={{ textDecoration: "none" }}
              >
                <BlogSideCard
                  key={index}
                  category={data.category}
                  date={data.date}
                  header={data.header}
                  img={data.img}
                />
              </Link>
            ))}
          </Grid>

          {/* SIDEBAR NEWS WAS HERE */}
        </div>
      </Grid>

      <CaseNavigation
        prevCase={prevCaseUrl}
        nextCase={nextCaseUrl}
        prevNav={"Next Blog"}
        nextNav={"Previous Nav"}
        prevHeader={prevCaseUrl ? blogBlurbs[prevIndex].header : ""}
        nextHeader={nextCaseUrl ? blogBlurbs[nextIndex].header : ""}
      />

      <FooterNew />
    </div>
  );
};

export default BlogDetails;
