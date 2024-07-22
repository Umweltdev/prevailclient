import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Box,
  Stack,
  Paper,
  Avatar,
  Grid,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../utils/Loading";
import { AuthContext } from "../../context/AuthContext";

const Question = ({ openDrawer }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");
  const location = useLocation();

  const { user } = useContext(AuthContext);

  if (!user) {
    return <Loading />;
  }

  console.log(user);
  const eachUser = user?.user;
  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"Questionnaire"}
        openDrawer={openDrawer}
        button="Edit Answers"
        link={`/user/question/${user?.user._id}`}
      />

      <Paper
        elevation={0}
        sx={{
          paddingY: 4,
          paddingX: Mobile ? 3 : 1.5,

          display: "flex",
          bgcolor: "white",
          flexDirection: isNonMobile ? "row" : "column",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            width: "47%",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          <Typography sx={{ fontWeight: "900", mb: "10px" }}>
            Business Overview
          </Typography>
          <hr />
          {/* ++++++++++ */}
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              Why was it founded? What is the story behind the business?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q1}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              What is the industry/sector?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q2}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              Does the company have a mission statement or core values?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q3}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              Briefly describe the company in a few sentences.
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q4}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              What are some of the goals/objectives? (increase revenue, increase
              profit, improve my ROI, get more conversions, lower my acquisition
              cost, other)
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q5}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              What is the vision for the company in the future? (For example, in
              2 years+)
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q6}</Typography>
          </Box>
          <hr />
        </Box>
        <hr />

        {/* ++++++++++++++++++++++++++++++++++++++++++ */}
        <Box
          sx={{
            width: "47%",
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        >
          <Typography sx={{ fontWeight: "900", mb: "10px" }}>
            Market Overview:
            <hr />
          </Typography>
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              Can you provide a list of competitors?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q7}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              What sets the company apart from competitors?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q8}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              Can you describe your typical customer? (demographic, geographic,
              psychographic, and behavioural traits)
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q9}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              What problems does your business solve for prospects/customers?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q10}</Typography>
          </Box>
          <hr />
          <Box sx={{ my: "10px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "" }}>
              What is your unique selling point (USP) which sets you apart from
              your competitors?
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{eachUser.q11}</Typography>
          </Box>
          <hr />
        </Box>
      </Paper>
    </Stack>
  );
};

export default Question;
