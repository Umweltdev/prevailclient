import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Icon1 from "../assets/image_115.png";
import Icon2 from "../assets/image_116.png";
import Icon3 from "../assets/image_117.png";
import Icon4 from "../assets/image_118.png";
import Icon5 from "../assets/image_119.png";
import Icon6 from "../assets/image_120.png";
import Icon7 from "../assets/image_121.png";
import Icon8 from "../assets/image_122.png";
import SmallCard from "./SmallCard";
import LargeCard from "./LargeCard";
import LargerCard from "./LargerCard";
import MediumCard from "./MediumCard";
import styles from "../assets/explore.module.css"; // Import the animation CSS

const Digital = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card4Ref, inView: card4InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card5Ref, inView: card5InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card6Ref, inView: card6InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card7Ref, inView: card7InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card8Ref, inView: card8InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={sectionRef}
      className={`${styles.section} ${sectionInView ? styles.visible : ""}`}
      sx={{
        background: "linear-gradient(135deg, #d1c4e9, #ffffff, #bbdefb)",
        padding: "2rem 0",
        minHeight: "100vh", // Ensure full height of the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ padding: "2rem" }}>
        <Typography
          sx={{ mb: "24px" }}
          variant="h6"
          align="center"
          pt="176px"
          color="primary"
          gutterBottom
        >
          Digital Ecosystem
        </Typography>
        <Typography
          sx={{ mb: "24px" }}
          variant="h4"
          align="center"
          gutterBottom
        >
          The Ultimate Products We Serve
        </Typography>
        <Grid
          sx={{
            pt: "88px",
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <div
            ref={card1Ref}
            className={`${styles.cardContainer} ${
              card1InView ? styles.visible : ""
            }`}
          >
            <SmallCard
              icon={Icon1}
              header={"Digital Landscape"}
              text={`The term "digital landscape" refers to the entire digital environment where your brand operates. This includes various online platforms, digital trends, consumer behavior online, and the evolution of digital marketing strategies.`}
            />
          </div>
          <div
            ref={card2Ref}
            className={`${styles.cardContainer} ${
              card2InView ? styles.visible : ""
            }`}
          >
            <LargeCard
              icon={Icon2}
              header={"Brand Awareness"}
              text={`Brand awareness strategies are to introduce your brand and its products or services to your target audience. The goal is to create a long-lasting impression in the minds of potential customers so that when they are ready to make a purchase, they think of your brand.`}
            />
          </div>
          <div
            ref={card3Ref}
            className={`${styles.cardContainer} ${
              card3InView ? styles.visible : ""
            }`}
          >
            <MediumCard
              icon={Icon3}
              header={"Competitor Analysis"}
              text={`To succeed in the market, it is essential to research and understand your competitors’ strategies, strengths, weaknesses, and market positioning. Examining your competitors can aid you in identifying market gaps, learning from their successes or mistakes, and differentiating your brand.`}
            />
          </div>
          <div
            ref={card4Ref}
            className={`${styles.cardContainer} ${
              card4InView ? styles.visible : ""
            }`}
          >
            <MediumCard
              icon={Icon4}
              header={"Keyword Ranking"}
              text={`A high keyword ranking can lead to organic traffic being directed to your site, improve visibility, and enhance brand credibility. SEO (Search Engine Optimization) strategies such as optimizing website content, building backlinks, and improving site performance are used to improve keyword rankings.`}
            />
          </div>
          <div
            ref={card5Ref}
            className={`${styles.cardContainer} ${
              card5InView ? styles.visible : ""
            }`}
          >
            <SmallCard
              icon={Icon5}
              header={"Targeted Advertising"}
              text={`A strategy in which you direct your advertising efforts to a specific audience based on demographics, interests, behaviors, or other criteria. This approach aims to spend your marketing budget more efficiently by reaching people more likely to be interested in your products or services.`}
            />
          </div>
          <div
            ref={card6Ref}
            className={`${styles.cardContainer} ${
              card6InView ? styles.visible : ""
            }`}
          >
            <LargerCard
              icon={Icon6}
              header={"Higher Visibility"}
              text={`This goal aims to enhance your business’s online presence to become more noticeable to prospective customers. This objective can be achieved through various means, such as improving search engine rankings, engaging on social media, and content marketing. The more visible your brand is online and offline, the more likely it is to be considered by potential customers.`}
            />
          </div>
          <div
            ref={card7Ref}
            className={`${styles.cardContainer} ${
              card7InView ? styles.visible : ""
            }`}
          >
            <LargeCard
              icon={Icon7}
              header={"Optimization"}
              text={`This refers to continuously improving your digital marketing strategies to achieve better results. It can involve website optimization for better user experience and SEO ranking, improving ad campaigns, data analysis, and making informed adjustments to stay ahead of the competition and achieve your marketing goals.`}
            />
          </div>
          <div
            ref={card8Ref}
            className={`${styles.cardContainer} ${
              card8InView ? styles.visible : ""
            }`}
          >
            <SmallCard
              icon={Icon8}
              header={"Reporting"}
              text={`This involves collecting and analyzing data to evaluate the performance of your digital marketing activities. Reporting provides valuable insights into campaign effectiveness, audience behavior, and overall return on investment. It informs decisions to improve your marketing strategy.`}
            />
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default Digital;
