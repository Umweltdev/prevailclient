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

const Profile = () => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"My Profile"}
        // openDrawer={openDrawer}
        button="Edit Profile"
        link={`/user/profile/${user?._id}`}
      />

      <Paper
        elevation={0}
        sx={{
          paddingY: 2,
          paddingX: Mobile ? 3 : 1.5,

          display: "flex",
          bgcolor: "white",
          flexDirection: isNonMobile ? "row" : "column",
        }}
      >
        <Box
          sx={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
        >
          <small
            style={{
              color: "rgb(125, 135, 156)",
            }}
          >
            First Name
          </small>
          <Typography variant="subtitle2" textTransform="capitalize">
            {user.user.firstName}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
        >
          <small
            style={{
              color: "rgb(125, 135, 156)",
            }}
          >
            Last Name
          </small>
          <Typography variant="subtitle2" textTransform="capitalize">
            {user?.user.lastName}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
        >
          <small
            style={{
              color: "rgb(125, 135, 156)",
            }}
          >
            Email
          </small>
          <Typography variant="subtitle2">{user?.user.email}</Typography>
        </Box>
        <Box
          sx={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
        >
          <small
            style={{
              color: "rgb(125, 135, 156)",
            }}
          >
            Company
          </small>
          <Typography variant="subtitle2">{user?.user.company}</Typography>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Profile;
