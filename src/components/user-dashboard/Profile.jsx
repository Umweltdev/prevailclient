import { useState, useEffect } from "react";
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
// import { useSelector } from "react-redux";

const Profile = ({ openDrawer }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"My Profile"}
        openDrawer={openDrawer}
        button="Edit Profile"
        // link={`/user/profile/${user?._id}`}
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
          Valentine
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
            Doe
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
          <Typography variant="subtitle2">vdoe@gmail.com</Typography>
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
            Username
          </small>
          <Typography variant="subtitle2">vldoe@gmail.com</Typography>
        </Box>
        {/* <Box
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
            Birth Date
          </small>
          <Typography variant="subtitle2">
            {" "}
            {user?.dob &&
              new Date(user.dob).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
          </Typography>
        </Box> */}
      </Paper>
    </Stack>
  );
};

export default Profile;
