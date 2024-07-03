import React from "react";
import AppBarNav from "../../Navbar/Appbar";
import { Container, Grid, Typography, Stack, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import styles from "../assets/explore.module.css"; // Import the animation CSS
import image1 from "../CJ/Trigger-Phase.webp";
import image2 from "../CJ/Initial-Consideration.webp";
import image3 from "../CJ/Active-Evaluation.webp";
import image4 from "../CJ/Purchasing.webp";
import image5 from "../CJ/Special-Offer.webp";

const Trigger = () => {
  const { ref: triggerTextRef, inView: triggerTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: triggerImageRef, inView: triggerImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: considerationTextRef, inView: considerationTextInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const { ref: considerationImageRef, inView: considerationImageInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const { ref: evaluationTextRef, inView: evaluationTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: evaluationImageRef, inView: evaluationImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: purchasingTextRef, inView: purchasingTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: purchasingImageRef, inView: purchasingImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: offerTextRef, inView: offerTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: offerImageRef, inView: offerImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#000" />
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
        }}
      >
        <Stack spacing={{ xs: 7, md: 12 }}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <div
                ref={triggerTextRef}
                className={`${styles.contentContainer} ${
                  triggerTextInView ? styles.visible : ""
                }`}
              >
                <Stack spacing={3} color={"#505660"}>
                  <Typography
                    fontSize={{ xs: "24px", md: "28px" }}
                    sx={{
                      fontSize: "28px",
                      color: "#1D0D40",
                      fontWeight: "600",
                    }}
                  >
                    Trigger Phase: Understand and Engage
                  </Typography>
                  <Typography>
                    Every customer's journey begins with a trigger – the
                    realisation of a need or desire. At Prevail, we know how
                    important it is for your business to truly grasp the
                    challenges and emotional factors that drive customer
                    interest in what you have to offer. 
                  </Typography>
                  <Typography>
                    By looking at how people interact with your online presence,
                    such as your website performance, customer interaction, plus
                    organic and paid traffic, we can help you gain insights into
                    what your customers like and don't like.
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div
                ref={triggerImageRef}
                className={`${styles.imageContainer} ${
                  triggerImageInView ? styles.visible : ""
                }`}
              >
                <Box
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={image1}
                    alt="Trigger-Phase"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    className="imagee"
                  />
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
              <div
                ref={considerationImageRef}
                className={`${styles.imageContainer} ${
                  considerationImageInView ? styles.visible : ""
                }`}
              >
                <Box
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={image2}
                    alt="Initial-Consideration"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    className="imagee"
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <div
                ref={considerationTextRef}
                className={`${styles.contentContainer} ${
                  considerationTextInView ? styles.visible : ""
                }`}
              >
                <Stack spacing={3} color={"#505660"}>
                  <Typography
                    fontSize={{ xs: "24px", md: "28px" }}
                    sx={{
                      color: "#1D0D40",
                      fontWeight: "600",
                    }}
                  >
                    Initial Consideration: Establish Brand Presence
                  </Typography>
                  <Typography>
                    Once potential customers recognize their needs, they enter
                    the initial consideration phase, where they start thinking
                    about brands that might meet these needs. Creating and
                    maintaining a consistent brand presence across all digital
                    touchpoints is crucial. 
                  </Typography>
                </Stack>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <div
                ref={evaluationTextRef}
                className={`${styles.contentContainer} ${
                  evaluationTextInView ? styles.visible : ""
                }`}
              >
                <Stack spacing={3} color={"#505660"}>
                  <Typography
                    fontSize={{ xs: "24px", md: "28px" }}
                    sx={{
                      fontSize: "28px",
                      color: "#1D0D40",
                      fontWeight: "600",
                    }}
                  >
                    Active Evaluation: Showcase and Compare
                  </Typography>
                  <Typography>
                    During this, customers actively look around, just like
                    window-shopping – comparing different brands for what they
                    offer, and what is the best value for their money. At
                    Prevail, our “Website Production” service ensures that your
                    online presence is not only striking but also informative
                    and user-friendly.
                  </Typography>
                  <Typography>
                    Your website serves as your digital storefront, providing
                    extensive product information, customer testimonials, blogs,
                    and FAQs. Alongside, our SEM strategies, particularly
                    pay-per-click (PPC) advertising, play a vital role by
                    placing targeted ads that attract and engage potential
                    customers who are actively seeking solutions. 
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div
                ref={evaluationImageRef}
                className={`${styles.imageContainer} ${
                  evaluationImageInView ? styles.visible : ""
                }`}
              >
                <Box
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={image3}
                    alt="Active-Evaluation"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    className="imagee"
                  />
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
              <div
                ref={purchasingImageRef}
                className={`${styles.imageContainer} ${
                  purchasingImageInView ? styles.visible : ""
                }`}
              >
                <Box
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={image4}
                    alt="Purchasing"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    className="imagee"
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <div
                ref={purchasingTextRef}
                className={`${styles.contentContainer} ${
                  purchasingTextInView ? styles.visible : ""
                }`}
              >
                <Stack spacing={3} color={"#505660"}>
                  <Typography
                    fontSize={{ xs: "24px", md: "28px" }}
                    sx={{
                      fontSize: "28px",
                      color: "#1D0D40",
                      fontWeight: "600",
                    }}
                  >
                    Purchasing: Seamless Conversion 
                  </Typography>
                  <Typography>
                    As customers make their final purchasing decisions, it’s
                    essential that this process is seamless. Prevail’s “Brand
                    Identity Package” service distinguishes your brand, ensuring
                    it stands out. Our “Search Engine Marketing” service targets
                    the right demographics on platforms like Google and Bing,
                    while our “Website Production” services keep your website
                    attractive and user-friendly.  
                  </Typography>
                  <Typography>
                    We are excited to offer our “Digital Accelerator” bundle at
                    a significant value, integrating these key services to boost
                    your digital marketing efforts comprehensively. 
                  </Typography>
                </Stack>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <div
                ref={offerTextRef}
                className={`${styles.contentContainer} ${
                  offerTextInView ? styles.visible : ""
                }`}
              >
                <Stack spacing={3} color={"#505660"}>
                  <Typography
                    fontSize={{ xs: "24px", md: "28px" }}
                    sx={{
                      fontSize: "28px",
                      color: "#1D0D40",
                      fontWeight: "600",
                    }}
                  >
                    Special Offer: The Digital Accelerator Bundle 
                  </Typography>
                  <Typography>
                    Take advantage of our current promotion – the “Digital
                    Accelerator” bundle, which combines our leading services to
                    enhance your digital presence significantly. Available at a
                    substantial discount of up to 70%, this bundle is designed
                    to make your business shine online and attract more
                    customers efficiently.
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div
                ref={offerImageRef}
                className={`${styles.imageContainer} ${
                  offerImageInView ? styles.visible : ""
                }`}
              >
                <Box
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    width: "100%",
                  }}
                >
                  <img
                    src={image5}
                    alt="Special-Offer"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    className="imagee"
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export default Trigger;
