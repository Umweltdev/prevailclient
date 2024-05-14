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
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./pm2.png";
import { Grid, Menu, MenuItem } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

const drawerWidth = 240;

const servicesData = [
  {
    text: "Services",
    link: "/Services",
  },
  {
    text: "Brand Identity",
    link: "/Services/brand",
  },
  {
    text: "Custom Website & Management",
    link: "/Services/website",
  },
  {
    text: "Website Developement & Management",
    link: "/Services/webmanagement",
  },
  {
    text: "Search Engine Marketing (SEM)",
    link: "/Services/sem",
  },
  {
    text: "Marketing Price Displacement (MPD)",
    link: "/Services/mpd",
  },
  {
    text: "Digital Accelerator",
    link: "/Services/digitalaccelerator",
  },
];

function DrawerAppBarWhite() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const { isLoggedIn, dispatch } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

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
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos <= 100;

      setShowNavbar(isVisible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = React.useMemo(
    () =>
      isLoggedIn
        ? [
            "About",
            {
              label: "Services",
              onClick: handleServicesClick,
            },
            "Portfolio",
            "Blog",
            "Contact",
            {
              label: "Dashboard",
              onClick: handleUserDashboard,
              path: "/user/profile",
            },
            { label: "Logout", onClick: handleLogout, path: "/login" },
          ]
        : [
            "About",
            {
              label: "Services",
              onClick: handleServicesClick,
            },
            "Portfolio",
            "Blog",
            "Contact",
            "SignUp",
            "Login",
          ],
    [isLoggedIn, handleLogout]
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "#884ed9",

        "@media (max-width: 600px)": { overflow: "hidden" },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          marginRight: "10vw",
          fontFamily: `"Sarabun","sans-serif"`,
        }}
      >
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <img style={{ height: "10vh" }} src={logo} alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem sx={{ textAlign: "center" }} key={index} disablePadding>
            {typeof item === "string" ? (
              <Link
                to={`/${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#884ed9",
                  fontFamily: `"Sarabun","sans-serif"`,
                }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            ) : (
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      {showNavbar && (
        <AppBar
          component="nav"
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            fontFamily: `"Sarabun","sans-serif"`,
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            padding: "0 4vw",
            "@media (max-width: 600px)": {
              background: "rgba(255, 255, 255, 0.2)",
              height: "10vh",
              display: "flex",
              justifyContent: "center",
              padding: "0 4vw",
              overflow: "hidden",
            },
          }}
        >
          <Toolbar>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "59vw",
                "@media (max-width: 600px)": { overflow: "hidden" },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon
                  sx={{
                    color: "#333",
                    background: "white",
                    padding: "1.5vw",
                    fontSize: "4vh",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
              >
                <Link
                  to={`/`}
                  style={{
                    textDecoration: "none",
                    color: "#884ed9",
                    fontFamily: `"Sarabun","sans-serif"`,
                  }}
                >
                  <img style={{ width: "14vw" }} src={logo} alt="logo" />
                </Link>
              </Typography>
            </Grid>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: `"Sarabun","sans-serif"`,
              }}
            >
              <Link
                to={`/`}
                style={{
                  textDecoration: "none",
                  color: "#884ed9",
                }}
              >
                <img style={{ height: "10vh" }} src={logo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {navItems.map((item, index) => (
                  <ListItem key={index}>
                    {typeof item === "string" ? (
                      <Button
                        key={item}
                        sx={{
                          color: "#884ed9",
                          fontWeight: "900",
                        }}
                      >
                        <Link
                          to={`/${item.toLowerCase()}`}
                          style={{
                            textDecoration: "none",
                            color: "#884ed9",
                            fontFamily: `"Sarabun","sans-serif"`,
                          }}
                        >
                          {item}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        key={item.label}
                        sx={{
                          color: "#884ed9",
                          fontWeight: "900",
                          fontFamily: `"Sarabun","sans-serif"`,
                        }}
                        onClick={item.onClick}
                      >
                        {item.label}
                      </Button>
                    )}
                  </ListItem>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      )}
      <nav>
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
      </nav>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {servicesData.map((data, i) => (
          <MenuItem key={i} onClick={handleClose}>
            <Link
              style={{
                color: "#333",
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

export default DrawerAppBarWhite;
