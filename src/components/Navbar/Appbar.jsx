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
import { Menu, MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = ["About", "Services", "Portfolio", "Blog", "Contact"];
const servicesSubItems = [
  "Collaborative Process",
  "Visual Harmony",
  "Customer Journey Mapping",
  "Multi-Platform Presence",
  "Practical Collaterals",
  "iverse Design Proposals",
];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  const handleMouseOverServices = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeaveServices = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          <img style={{ height: "10vh" }} src={wLogo} alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            {item === "Services" ? (
              <React.Fragment>
                <Button
                  sx={{ color: "#884ed9", fontWeight: "900" }}
                  onMouseOver={handleMouseOverServices}
                >
                  {item}
                </Button>
                <Menu
                  id={`menu-${item}`}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  {servicesSubItems.map((subItem, index) => (
                    <MenuItem key={subItem}>
                      <Link
                        to={`/Services/${index}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClose(); 
                        }}
                      >
                        {subItem}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            ) : (
              <Link
                to={`/${item.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
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
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            padding: "0 4vw",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link
                to={`/`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img style={{ height: "10vh" }} src={wLogo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#884ed9", fontWeight: "900" }}
                  onMouseOver={
                    item === "Services" ? handleMouseOverServices : null
                  }
                  onMouseLeave={handleMouseLeaveServices}
                >
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
      )}
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

export default DrawerAppBar;
