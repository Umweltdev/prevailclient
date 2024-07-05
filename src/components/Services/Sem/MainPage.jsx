import { Grid } from "@mui/material";
import React from "react";
import ImageTextComponent from "../ReusedComponenets/ImageTextComponent";
import TextImageComponent from "../ReusedComponenets/TextImageComponent";
//import SpecialImageTextComponent from "../ReusedComponenets/SpecialImageTextComponent";

const MainPage = () => {
  return (
    <Grid
      sx={{
        background: "#fff",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <ImageTextComponent
        img="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720089780/Power-of-SEM_ts1dts.avif"
        alt={"Power-of-SEM"}
        header={"Unleashing the Power of SEM for Local Businesses and SMEs "}
        text={`At Prevail, we resonate deeply with the aspirations of local businesses and small-to-medium enterprises (SMEs) dreaming of growth, recognition, and success. In today's competitive digital marketplace, merely existing isn't enough—you need to stand out. That's where our Search Engine Marketing (SEM) service comes into play, a true game-changer for your business. Our comprehensive approach not only enhances visibility but ensures your marketing efforts resonate with your core mission and objectives.<br/><br/>Our SEM strategy encompasses target advertising, technical site audit, website optimisation, meticulous search engine optimisation, real-time performance tracking, and continual adjustments based on detailed reports. This holistic approach is designed to align perfectly with your business's goal, providing a clear path to increased visibility and success. `}
      />
      <TextImageComponent
        img="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720089778/Digital-Marketing-Maze_srxr5o.avif"
        alt={"Digital-Marketing-Maze"}
        header={"Navigating the Digital Marketing Maze"}
        text={`For many local businesses, the digital marketing landscape can appear overwhelmingly complex. It’s like trying to make your voice heard in an endlessly bustling crowd. Without the right tools and strategies, standing out becomes an unsurmountable challenge. Moreover, budget constraints often add an additional layer of difficult, making efficient use of resources paramount. <br/><br/>Prevail recognise these challenges. Our SEM services are akin to handling you a microphone to amplify your message, ensuring it reaches the correct audience efficiently. We focus on targeted strategies that maximise every dollar spent, steering clear of inefficient, broad-spectrum tactics that waste resources without yielding substantial returns. `}
      />
      <ImageTextComponent
        img="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720089780/Precision-Targeting-with-SEM_rsmbuq.avif"
        alt={"Precision-Targeting-with-SEM"}
        header={"Precision Targeting with SEM "}
        text={`Imagine your business not just being seen but truly being noticed – by exactly the right people. Our SEM service doesn’t just throw a wide net hoping to catch anyone and everyone. We aim for precision, ensuring your business is visible to those actively seeking what you offer. This targeted approach doesn’t just increase visibility; it connects you directly with your ideal audience, transforming ordinary searches into valuable business opportunities. <br/><br/>With Prevail, setting up an SEM campaign is just the beginning. We continually nurture and adapt your campaign to the ever-evolving landscape of online marketing, ensuring your business remains relevant and strong. Our approach is dynamic, responsive, and tailored, designed to keep you one step ahead in a face-pace digital world. `}
      />
      <TextImageComponent
        img="https://res.cloudinary.com/dtzuqacg3/image/upload/v1720089779/Growth_-Visibility-and-Success_lw2zo4.avif"
        alt={"Growth_-Visibility-and-Success"}
        header={"Growth, Visibility and Success  "}
        text={`Choose Prevail’s SEM services and take a significant step toward realising the vision of growth, recognition, and success for your business. Our commitment to precision, efficiency, and adaptability in digital marketing ensures that your voice is not just heard, but that it resonates where it counts. Let us help you turn your dreams into reality by making your business a prominent contender in the digital marketplace. `}
      />
    </Grid>
  );
};

export default MainPage;
