import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid, Container, Drawer } from "@mui/material";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import DashboardBox from "./DashboardBox";
import Profile from "./Profile";
import Bookings from "./Bookings";
import Booking from "./Booking";
import Addresses from "./Addresses";
import Address from "./Address";
import EditProfile from "./Edit-Profile";
import SavedProperties from "./SavedProperties";


const UserDashBoard = () => {
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <Box
        sx={{
          bgcolor: "#fbfbfb",
          paddingY: "40px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} position="relative">
            <Grid item md={12} lg={3} display={{ xs: "none", md: "block" }} position={{xs:"relative",lg:"sticky" }}top="0" height="100%">
              <Box
                bgcolor="#fff"
                py={5}
                borderRadius={2}
                pr={2}
                sx={{
                  boxShadow: " 0px 1px 3px rgba(3, 0, 71, 0.09)",
                }}
              >
                <DashboardBox />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={9}>
              <Routes>
                <Route
                  path="/profile"
                  element={<Profile openDrawer={openDrawer} />}
                />
                <Route
                  path="/profile/:id"
                  element={<EditProfile openDrawer={openDrawer} />}
                />
                <Route
                  path="/bookings"
                  element={<Bookings openDrawer={openDrawer} />}
                />
                <Route
                  path="/bookings/:id"
                  element={<Booking openDrawer={openDrawer} />}
                />
                <Route
                  path="/addresses"
                  element={<Addresses openDrawer={openDrawer} />}
                />
                <Route
                  path="/addresses/:id"
                  element={<Address openDrawer={openDrawer} />}
                />
                <Route
                  path="/saved"
                  element={<SavedProperties openDrawer={openDrawer} />}
                />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Drawer
        open={drawer}
        onClose={closeDrawer}
        anchor="left"
        bgcolor="white"
        sx={{
          zIndex: "1200",
          "& .MuiPaper-root": {
            backgroundColor: "white",
          },
        }}
      >
        <Box
          sx={{
            py: 3,
            pr: 1,
            width: "280px",
            height: "100vh",
          }}
        >
          <DashboardBox closeDrawer={closeDrawer} />
        </Box>
      </Drawer>
      <Newsletter />
      <Footer />
    </>
  );
};

export default UserDashBoard;
