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
import { Grid } from "@mui/material";

const drawerWidth = 240;
const navItems = ["About", "Services", "Portfolio", "Blog", "Contact"];

function DrawerAppBarWhite() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);

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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        "@media (max-width: 600px)": { overflow: "hidden" },
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          <img style={{ height: "10vh" }} src={logo} alt="logo" />
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
      {showNavbar && (
        <AppBar
          component="nav"
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
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
                gap: "57vw",
                "@media (max-width: 600px)": { overflow: "hidden" },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{  display: { sm: "none" } }}
              >
                <MenuIcon
                  sx={{
                    color: "#333",
                    background: "white",
                    padding: "1.5vw",
                    fontSize: "4vh",
                    borderRadius: "50%"
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
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img style={{ width: "14vw" }} src={logo} alt="logo" />
                </Link>
              </Typography>
            </Grid>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link
                to={`/`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img style={{ height: "10vh" }} src={logo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#884ed9", fontWeight: "900" }}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "#884ed9" }}
                  >
                    {item}
                  </Link>
                </Button>
              ))}
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
    </Box>
  );
}

export default DrawerAppBarWhite;
