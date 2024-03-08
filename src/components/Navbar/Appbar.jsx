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
import { Link } from "react-router-dom";
import wLogo from "./wlogo.png";
import logo from "./pmmlogo.png";

const drawerWidth = 240;

const navItems = ["About", "Services", "Blog", "Contact"];

function DrawerAppBarWhite() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);

  React.useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos <= 200;

      setShowNavbar(isVisible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          <img src={wLogo} alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={`/${item.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          height: "15vh",
          display: "flex",
          justifyContent: "center",
          padding: "0 4vw",
          transition: "opacity 0.6s",
          opacity: showNavbar ? 1 : 0,

          "@media (max-width: 600px)": {
            height: "8vh", // Adjust height for mobile view
            padding: "0 2vw", // Adjust padding for mobile view
            overflow: "hidden",
          },
        }}
      >
        <Toolbar
          sx={{ height: 50, display: "flex", justifyContent: "space-between" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              // mr: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
            <img style={{ height: "5vh" }} src={logo} alt="logo" />
          </Link>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
              <img style={{ height: "5vh" }} src={wLogo} alt="logo" />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#003988", fontWeight: "900" }}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
    </Box>
  );
}

export default DrawerAppBarWhite;
