import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { StarterBrandIdentity } from "../assets/serviceData";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";


const PackagesLayout = ({ packages, amount, info, handleClick, onBoxClick }) => {
  const { user } = useContext(AuthContext);

  return (
    <Card
      sx={{
        width: "23vw",
        height: "530px",
        borderRadius: 4,
        boxShadow: "2",
        "@media (max-width: 760px)": {
          marginTop: "1vh",
          height: "530px",
          width: "90vw",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        },
      }}
      onClick={onBoxClick}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
          padding: "3vw 0 ",
          alignItems:"center",

          "@media (max-width: 600px)": {
            padding: "5vh 2vh",
          },
        }}
      >
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bold"
            sx={{ fontSize: "18px" }}
          >
            {packages}
          </Typography>
          <Typography
            sx={{ color: "#656565;", fontSize: "16px", textAlign: "center" }}
          >
            {info}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "-10",
          }}
        >
          <Typography
            sx={{ color: "#000", fontSize: "40px", fontWeight: "700" }}
          >
            €{amount}
          </Typography>
          <Typography sx={{ width: "88px", fontSize: "14px" }}>
            One Off Payment
          </Typography>
        </Box>
        
        <Button
          sx={{
            background: "#6E3EF4",
            borderRadius: "5px",
            color: "#fff",
            width: "220px",
            margin: "auto",
            "&:hover": {
              background: "#6E3EF4",
              borderRadius: "5px",
              color: "#fff",
            },
          }}
          onClick={handleClick}
        >
          Book now
        </Button>
       
        

        {/* Render the StarterBrandIdentity items */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            mt: "30px",
          }}
        >
          {StarterBrandIdentity.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: "10px",
                marginLeft: "10px",
                justifyContent: "center",
              }}
            >
              <Check sx={{ color: "green" }} />
              <Typography
                textAlign="left"
                variant="body2"
                color="text.secondary"
                width={"222px"}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PackagesLayout;
