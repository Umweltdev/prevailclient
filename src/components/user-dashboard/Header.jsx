import { Typography, Stack, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const Header = ({ Icon, title, button, openDrawer, link }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const marginBottom = button ? { xs: 1.5, md: 0 } : 0;
  const alignment = button ? "start" : "center";

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems={alignment}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "start", md: "center" }}
        width={{ xs: "auto", md: "100%" }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1, md: 2 }}
          alignItems="center"
          mb={marginBottom}
        >
          <Icon
            sx={{
              color: "#884ed9",
            }}
          />

          <Typography
            variant="h5"
            color="text.primary"
            fontSize={{ xs: "20px", md: "25px" }}
          >
            {title}
          </Typography>
        </Stack>
        {button && (
          <Link
            to={link}
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#f3e8ee",
                color: "#884ed9",
                fontSize: "subtitle2",
                paddingX: isNonMobile ? "40px" : "20px",
                fontWeight: 600,
                paddingY: "6px",
                "&:hover": {
                  backgroundColor: "rgba(210, 63, 87, 0.04)",
                },
              }}
            >
              {button} 
            </Button>
          </Link>
        )}
      </Stack>

      <IconButton
        onClick={openDrawer}
        sx={{
          display: isNonMobile ? "none" : "inline-flex",
        }}
      >
        <MenuIcon />
      </IconButton>
    </Stack>
  );
};
// webpii

export default Header;
