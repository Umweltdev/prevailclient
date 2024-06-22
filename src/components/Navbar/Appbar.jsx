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

const drawerWidth = 240;

const servicesData = [
  { text: "Services", link: "/Services" },
  { text: "Brand Identity", link: "/Services/brand" },
  { text: "Custom Website & Management", link: "/Services/website" },
  { text: "Website Development & Management", link: "/Services/webmanagement" },
  { text: "Search Engine Marketing (SEM)", link: "/Services/sem" },
  { text: "Marketing Price Displacement (MPD)", link: "/Services/mpd" },
  { text: "Digital Accelerator", link: "/Services/digitalaccelerator" },
];

const exploreData = [
  { text: "Digital Ecosystem", link: "/explore/digitalecosystem" },
  { text: "Customer Journey", link: "/explore/customerjourney" },
];

function AppBarNav({ color }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const [anchorElExplore, setAnchorElExplore] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const { isLoggedIn, dispatch } = React.useContext(AuthContext);
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleUserDashboard = () => {
    navigate("/user/profile");
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
            { label: "Blog", link: "/blog" },
            { label: "About Us", link: "/about" },
            { label: "Contact Us", link: "/contact" },
            {
              label: "Dashboard",
              onClick: handleUserDashboard,
              path: "/user/profile",
            },
            { label: "Logout", onClick: handleLogout, path: "/login" },
          ]
        : [
            { label: "Explore", onClick: handleExploreClick },
            { label: "Services", onClick: handleServicesClick },
            { label: "Blog", link: "/blog" },
            { label: "About Us", link: "/about" },
            { label: "Contact Us", link: "/contact" },
            { label: "Login", link: "/login" },
            { label: "Sign Up", link: "/signup" },
          ],
    [isLoggedIn, handleLogout]
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "#884ed9",
      }}
    >
      <Typography
        variant="h6"
        sx={{ my: 5, fontFamily: `"Sarabun","sans-serif"` }}
      >
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <img style={{ height: "10vh" }} src={logo} alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
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
              <Link to={`/`} style={{ textDecoration: "none" }}>
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
                    }}
                    onClick={handleUserDashboard}
                  >
                    Dashboard
                  </Button>
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
      >
        {servicesData.map((data, i) => (
          <MenuItem key={i} onClick={handleClose}>
            <Link
              style={{
                color: "#000",
                textDecoration: "none",
                textAlign: "left",
              }}
              to={data.link}
            >
              {data.text}
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={anchorElExplore}
        open={Boolean(anchorElExplore)}
        onClose={handleClose}
      >
        {exploreData.map((data, i) => (
          <MenuItem key={i} onClick={handleClose}>
            <Link
              style={{
                color: "#000",
                textDecoration: "none",
                textAlign: "left",
              }}
              to={data.link}
            >
              {data.text}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default AppBarNav;
