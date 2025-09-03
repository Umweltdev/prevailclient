import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "./newlogo.svg";
import { AuthContext } from "../../context/AuthContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";

const drawerWidth = 240;

const servicesData = [
  { text: "Services", link: "/service-landing-page" },
  { text: "Brand Identity", link: "/service/brand-identity-package" },
  { text: "Trinity Plus", link: "/trinity/plus" },
  {
    text: "Custom Website Development",
    link: "/service/custom-website-development",
  },
  { text: "Website Development", link: "/service/website-development" },
  {
    text: "Search Engine Marketing (SEM)",
    link: "/service/search-engine-marketing",
  },
  {
    text: "Marketing Price Displacement (MPD)",
    link: "/service/marketing-pricing-displacement",
  },
  {
    text: "Digital Accelerator Bundle",
    link: "/service/digital-accelerator-bundle",
  },
  { text: "Cost Calculation", link: "/service/cost-calculation" },
  { text: "Step Wizard", link: "/service/stepWizardPage" },
  { text: "Custom Ad Campaign", link: "/service/custom-ad-campaign" },
];

const trinityData = [
  { text: "Trinity Core", link: "/trinity/core" },
  { text: "Trinity Plus", link: "/trinity/plus" },
  { text: "Expense Manager", link: "/trinity/expense-manager" },
  { text: "Garo", link: "/trinity/garo" },
  { text: "MCD", link: "/trinity/mcd" },
  { text: "RCD", link: "/trinity/rcd" },
  { text: "AED", link: "/trinity/aed" },
];

const exploreData = [
  { text: "Digital Ecosystem", link: "/explore/digital-ecosystem" },
  { text: "Customer Journey", link: "/explore/customer-journey" },
];

function AppBarNav({ color }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElExplore, setAnchorElExplore] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [anchorElTrinity, setAnchorElTrinity] = React.useState(null);
  const { isLoggedIn, isAdmin, dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }, [dispatch, navigate]);

  const handleUserDashboard = () => navigate("/user/profile");
  const handleAdminPanel = () =>
    (window.location.href = "https://marvelous-muffin-8a8584.netlify.app");

  const handleServicesClick = (e) => setAnchorElServices(e.currentTarget);
  const handleExploreClick = (e) => setAnchorElExplore(e.currentTarget);
  const handleTrinityClick = (e) => setAnchorElTrinity(e.currentTarget);

  const handleClose = () => {
    setAnchorElServices(null);
    setAnchorElExplore(null);
    setAnchorElTrinity(null);
  };

  const navItems = React.useMemo(
    () =>
      isLoggedIn
        ? [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            { label: "Trinity Plus", onClick: handleTrinityClick },
          // { label: "Blog", link: "/blog" },
            { label: "Booking", link: "/booking" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
          ]
        : [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            { label: "Trinity Plus", onClick: handleTrinityClick },
          // { label: "Blog", link: "/blog" },
            { label: "Booking", link: "/booking" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
          ],
    [isLoggedIn]
  );

  const DrawerNavItems = React.useMemo(
    () =>
      isLoggedIn
        ? [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            { label: "Trinity Plus", onClick: handleTrinityClick },
          // { label: "Blog", link: "/blog" },
            { label: "Booking", link: "/booking" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
            ...(isAdmin
              ? [{ label: "Admin Panel", onClick: handleAdminPanel }]
              : []),
            { label: "Dashboard", link: "/user/profile" },
            { label: "Logout", onClick: handleLogout },
          ]
        : [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            { label: "Trinity Plus", onClick: handleTrinityClick },
          // { label: "Blog", link: "/blog" },
            { label: "Booking", link: "/booking" },

            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
            { label: "Login", link: "/login" },
            { label: "Sign Up", link: "/signup" },
          ],
    [isLoggedIn, isAdmin, handleLogout]
  );

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img style={{ height: "40px" }} src={logo} alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {DrawerNavItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={item.link ? Link : "div"}
              to={item.link || undefined}
              onClick={item.onClick || undefined}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: isScrolled ? "#fff" : "transparent",
          transition: "background-color 0.3s",
          py: 2,
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "none" },
                color: isScrolled ? "#000" : color,
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div">
              <Link to="/">
                <img style={{ height: "50px" }} src={logo} alt="logo" />
              </Link>
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {navItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    color:"#000" ,
                    mx: 2,
                    px: 1,
                    py: 1,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    "&:hover": { opacity: 0.7 },
                  }}
                  component={item.link ? Link : "div"}
                  to={item.link || undefined}
                  onClick={item.onClick || undefined}
                >
                  {item.label}
                  {["Explore", "Services", "Trinity"].includes(item.label) && (
                    <ExpandMoreIcon sx={{ marginLeft: "5px",  }} />
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {isLoggedIn ? (
                <>
                  <Button
                    variant="outlined"
                    sx={{ mr: 1 }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={handleUserDashboard}
                  >
                    Dashboard
                  </Button>
                  {isAdmin && (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleAdminPanel}
                    >
                      Admin Panel
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    sx={{ mr: 1 }}
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button variant="contained" component={Link} to="/signup">
                    Sign Up
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Menu
        anchorEl={anchorElServices}
        open={Boolean(anchorElServices)}
        onClose={handleClose}
      >
        {servicesData.map((data, i) => (
          <MenuItem
            key={i}
            component={Link}
            to={data.link}
            onClick={handleClose}
          >
            {data.text}
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={anchorElTrinity}
        open={Boolean(anchorElTrinity)}
        onClose={handleClose}
      >
        {trinityData.map((data, i) => (
          <Link
            key={i}
            to={data.link}
            style={{ color: "#6E3EF4", textDecoration: "none" }}
          >
            <MenuItem onClick={handleClose}>{data.text}</MenuItem>
          </Link>
        ))}
      </Menu>

<Menu
  anchorEl={anchorElExplore}
  open={Boolean(anchorElExplore)}
  onClose={handleClose}
>
  {exploreData.map((data, i) => (
    <MenuItem
      key={i}
      component={Link}
      to={data.link}
      onClick={handleClose}
      sx={{
        // color: "#6E3EF4",
        textDecoration: "none",
        textAlign: "left",
      }}
    >
      {data.text}
    </MenuItem>
  ))}
</Menu>

    </Box>
  );
}

AppBarNav.propTypes = {
  color: PropTypes.string,
};

export default AppBarNav;
