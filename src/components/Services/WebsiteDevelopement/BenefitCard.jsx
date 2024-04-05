import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const benefits = [
  {
    header: "Cost-Effective Solution",
    text: "Save on separate services by getting an all-in-one package, allowing you to invest your resources wisely and focus on growing your business.",
  },
  {
    header: "Competitive Edge",
    text: "Stay ahead of the competition with a website that not only meets but exceeds industry standards, showcasing your commitment to excellence.",
  },
  {
    header: "Local Trust and Recognition",
    text: "Establish a strong online presence, build trust among your audience, and enhance brand recognition within your market.",
  },
  {
    header: "Data-Driven Insights",
    text: "Equip yourself with insights and information with a custom performance dashboard. Gain a deeper understanding of your business dynamics and areas for improvement to make proactive and informed decisions to success. ",
  },
  {
    header: "Tailored Customer Engagement",
    text: "Ensure your audience with effective approaches through reviews, ratings, blog layouts, chatbots, and FAQ sections to address any concerns and questions.",
  },
  {
    header: "Community Building",
    text: "Experience the joy of building a community around your brand. Your website should be more than a transactional platform but a platform that fosters connection. Your audiences will not just browse; they will become part of a community.",
  },
];

// const BenefitCard = (
//   <Grid
//     sx={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "2vw",
//     }}
//   >
//     {benefits.map((data, index) => (
//       <Card
//         // elevation={15}
//         key={index}
//         sx={{
//           width: "25vw",
//           height: "30vh",
//           textAlign: "center",
//           background: "#fff",
//           // color: "black",
//           borderRadius: 4,
//           color: "#333",
//           boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px;",
//           "@media (max-width: 600px)": {
//             width: 350,
//             height: "auto",
//             background: "#fff",
//             color: "black",
//           },
//         }}
//       >
//         <CardContent>
//           <Typography
//             variant="h5"
//             // component="div"
//             textAlign="center"
//             fontSize="1.5vw"
//             mb="3vh"
//             fontWeight="900"
//             sx={{
//               "@media (max-width: 600px)": {
//                 fontSize: "4vw",
//                 mb: "1vh",
//               },
//             }}
//           >
//             {data.header}
//           </Typography>

//           <Typography variant="body2" textAlign="center">
//             {data.text}
//           </Typography>
//         </CardContent>
//       </Card>
//     ))}
//   </Grid>
// );

// export default BenefitCard;

const BenefitCard = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "2vw",
      }}
    >
      {benefits.map((data, index) => (
        <Card
          // elevation={15}
          key={index}
          sx={{
            width: "25vw",
            height: "33vh",
            textAlign: "center",
            background: "#fff",
            // color: "black",
            borderRadius: 4,
            color: "#333",
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px;",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 600px)": {
              width: "90vw",
              height: "unset",
              background: "#fff",
              color: "black",
              padding: "2vh",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              // component="div"
              textAlign="center"
              fontSize="1.5vw"
              mb="3vh"
              fontWeight="900"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "5vw",
                  mb: "1vh",
                },
              }}
            >
              {data.header}
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1vw",
                "@media (max-width: 600px)": {
                  fontSize: "4vw",
                  mb: "1vh",
                },
              }}
              variant="body2"
              textAlign="center"
            >
              {data.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default BenefitCard;
