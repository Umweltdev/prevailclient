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
  {
    text: "Cost Calculation",
    link: "/service/cost-calculation",
  },
];

const exploreData = [
  { text: "Digital Ecosystem", link: "/explore/digital-ecosystem" },
  { text: "Customer Journey", link: "/explore/customer-journey" },
];

function AppBarNav({ color }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElExplore, setAnchorElExplore] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const { isLoggedIn, isAdmin, dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }, [dispatch, navigate]);

  const handleUserDashboard = () => {
    navigate("/user/profile");
  };

  const handleAdminPanel = () => {
    window.location.href = "https://marvelous-muffin-8a8584.netlify.app";
  };

  const handleServicesClick = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleExploreClick = (event) => {
    setAnchorElExplore(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElServices(null);
    setAnchorElExplore(null);
  };

  const navItems = React.useMemo(
    () =>
      isLoggedIn
        ? [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            // { label: "Blog", link: "/blog" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },

            // ...(isAdmin
            //   ? [
            //       {
            //         label: "Admin Panel",
            //         onClick: handleAdminPanel,
            //         path: "https://667a6e03fc92ceb5b5ec2751--marvelous-muffin-8a8584.netlify.app/auth/jwt/login?returnTo=%2Fdashboard",
            //       },
            //     ]
            //   : []),
            { label: "Dashboard", link: "/contact-us" },

            { label: "Logout", onClick: handleLogout, path: "/login" },
          ]
        : [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            // { label: "Blog", link: "/blog" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
            { label: "Login", link: "/login" },
            { label: "Sign Up", link: "/signup" },
          ],
    [isLoggedIn, handleLogout]
  );

  const DrawerNavItems = React.useMemo(
    () =>
      isLoggedIn
        ? [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            // { label: "Blog", link: "/blog" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
            ...(isAdmin
              ? [
                  {
                    label: "Admin Panel",
                    onClick: handleAdminPanel,
                    path: "https://marvelous-muffin-8a8584.netlify.app",
                  },
                ]
              : []),
            { label: "Dashboard", link: "/user/profile" },

            { label: "Logout", onClick: handleLogout, path: "/login" },
          ]
        : [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            // { label: "Blog", link: "/blog" },
            { label: "About Us", link: "/about-us" },
            { label: "Contact Us", link: "/contact-us" },
            { label: "Login", link: "/login" },
            { label: "Sign Up", link: "/signup" },
          ],
    [isLoggedIn, isAdmin, handleLogout]
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#884ed9" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 5, fontFamily: `"Sarabun","sans-serif"` }}
      >
        <Link rel="canonical" to={`/`} style={{ textDecoration: "none" }}>
          <img style={{ height: "10vh" }} src={logo} alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {DrawerNavItems.map((item, index) => (
          <ListItem sx={{ textAlign: "center" }} key={index} disablePadding>
            <ListItemButton
              component={item.link ? Link : "div"}
              to={item.link ? item.link : null}
              onClick={item.onClick ? item.onClick : null}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // console.log("isLoggedIn: ", isLoggedIn);
  // console.log("isAdmin: ", isAdmin);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: isScrolled ? "#fff" : "rgba(0,0,0,0)",
          transition: "background-color 0.3s",
          boxShadow: isScrolled ? "1" : "0",
          borderBottom: "0 solid #E5E5E5",
          py: "20px",
        }}
      >
        <Container sx={{ px: { xs: 1, sm: 1, md: 1 } }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{
                display: { sm: "none" },
                color: isScrolled ? "#000" : color,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              <Link rel="canonical" to={`/`} style={{ textDecoration: "none" }}>
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
              {navItems.slice(0, -2).map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: isScrolled ? "#000" : color,
                    textTransform: "none",
                    margin: "0 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  rel="canonical"
                  component={item.link ? Link : "div"}
                  to={item.link ? item.link : null}
                  onClick={item.onClick ? item.onClick : null}
                >
                  {item.label}
                  {item.label === "Explore" && (
                    <ExpandMoreIcon sx={{ marginLeft: "5px" }} />
                  )}
                  {item.label === "Services" && (
                    <ExpandMoreIcon sx={{ marginLeft: "5px" }} />
                  )}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              {isLoggedIn ? (
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      marginRight: "10px",
                      borderColor: "#884ed9",
                      color: isScrolled ? "#000" : color,
                      textTransform: "none",
                      borderRadius: "20px",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#884ed9",
                      color: "white",
                      textTransform: "none",
                      borderRadius: "20px",
                      marginRight: "10px",
                    }}
                    onClick={handleUserDashboard}
                  >
                    Dashboard
                  </Button>
                  {isAdmin && (
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff5722",
                        color: "white",
                        textTransform: "none",
                        borderRadius: "20px",
                      }}
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
                    sx={{
                      marginRight: "15px",
                      borderColor: "#884ed9",
                      color: isScrolled ? "#000" : color,
                      textTransform: "none",
                      borderRadius: "20px",
                    }}
                    rel="canonical"
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#884ed9",
                      color: "white",
                      textTransform: "none",
                      borderRadius: "20px",
                    }}
                    component={Link}
                    rel="canonical"
                    to="/signup"
                  >
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
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Menu
        anchorEl={anchorElServices}
        open={Boolean(anchorElServices)}
        onClose={handleClose}
        sx={{ borderRadius: "50px" }}
      >
        {servicesData.map((data, i) => (
          <Link
            style={{
              color: "#6E3EF4",
              textDecoration: "none",
              textAlign: "left",
            }}
            key={i}
            to={data.link}
            rel="canonical"
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
          <Link
            style={{
              color: "#6E3EF4",
              textDecoration: "none",
              textAlign: "left",
            }}
            key={i}
            to={data.link}
            rel="canonical"
          >
            <MenuItem onClick={handleClose}>{data.text}</MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}

AppBarNav.propTypes = {
  color: PropTypes.string,
};

export default AppBarNav;
