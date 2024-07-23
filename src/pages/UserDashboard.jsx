import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid, Container, Drawer } from "@mui/material";
import DrawerAppBarWhite from "../components/Navbar/Appbar";
import DashboardBox from "../components/user-dashboard/DashboardBox";
import Profile from "../components/user-dashboard/Profile";
import EditProfile from "../components/user-dashboard/Edit-Profile";
import Bookings from "../components/user-dashboard/Bookings";
import Booking from "../components/user-dashboard/Booking";
import Addresses from "../components/user-dashboard/Addresses";
import Address from "../components/user-dashboard/Address";
import SavedProperties from "../components/user-dashboard/SavedProperties";
import FooterNew from "../components/Footer/FooterNew";
import { AuthContext } from "../context/AuthContext";
import Invoices from "../components/user-dashboard/Invoices";
import Invoice from "../components/user-dashboard/Invoice";
import AppBarNav from "../components/Navbar/Appbar";
import Message from "../components/user-dashboard/Message";
import CreateMessage from "../components/user-dashboard/Create-Message";
import Question from "../components/user-dashboard/Question";
import EditQuestion from "../components/user-dashboard/EditQuestion";
// import Message from "../components/user-dashboard/Message";
// import CreateMessage from "../components/user-dashboard/Create-Message";
// import ViewMessage from "../components/user-dashboard/View-Message";

const UserDashBoard = ({socket}) => {
  const [drawer, setDrawer] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <AppBarNav color="#333" />
      <Box
        sx={{
          bgcolor: "#fbfbfb",
          paddingY: "25vh",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} position="relative">
            <Grid
              item
              md={12}
              lg={3}
              display={{ xs: "none", md: "block" }}
              position={{ xs: "relative", lg: "sticky" }}
              top="0"
              height="100%"
            >
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
                  path="/question"
                  element={<Question openDrawer={openDrawer} />}
                />
                <Route
                  path="/question/:id"
                  element={<EditQuestion openDrawer={openDrawer} />}
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
                <Route
                  path="/invoices"
                  element={<Invoices openDrawer={openDrawer} />}
                />

                <Route
                  path="/invoices/:id"
                  element={<Invoice openDrawer={openDrawer} />}
                />
                {/* <Route
                  path="/message"
                  element={<Message openDrawer={openDrawer} />}
                />
                <Route
                  path="/message/view/:id"
                  element={<ViewMessage openDrawer={openDrawer} socket={socket} />}
                />
                <Route
                  path="/message/:id"
                  element={<CreateMessage openDrawer={openDrawer} />}
                /> */}
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
      {/* <Newsletter /> */}
      <FooterNew />
    </div>
  );
};

export default UserDashBoard;
